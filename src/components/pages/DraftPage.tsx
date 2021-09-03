import React, { useEffect, useMemo, useState } from 'react';
import SelectInput from '../common/SelectInput';
import PlayersPositionsFilter from '../PlayersPage/PlayersPositionsFilter';
import { IPlayer } from '../../models/Player/PlayerModels';
import PlayersTable from '../common/PlayersTable';
import { useFetchAllPlayers } from '../../hooks/useFetchPlayers';
import { Redirect, useParams } from 'react-router-dom';
import Loader from '../common/Loader';
import { useFetchLeagueInfo } from '../../hooks/useFetchLeagueInfo';
import { ILeagueInfo, LeagueStatus } from '../../models/League/LeagueModels';
import { GlobalPaths } from '../common/GlobalPath';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import TeamSelectionBox from '../common/TeamSelectionBox';
import { useCompleteDraft } from '../../hooks/useCompleteDraft';

interface TeamSelection {
  [id: string]: number[];
}

const headers = [
  {
    key: 'Player',
  },
  {
    key: 'Stats',
    subHeaders: [
      {
        key: 'MIN',
      },
      {
        key: 'FGMI',
      },
      {
        key: 'FTMI',
      },
      {
        key: 'TPM',
      },
      {
        key: 'REB',
      },
      {
        key: 'AST',
      },
      {
        key: 'STL',
      },
      {
        key: 'BLK',
      },
      {
        key: 'TO',
      },
      {
        key: 'PTS',
      }
    ],
  },
  {
    key: 'Avg',
  },
];

const DraftPage = () => {
  const { leagueId } = useParams<{ leagueId: string }>();
  const [positionsFilters, setPositionsFilters] = useState<string[]>([]);
  const [filteredPlayers, setFilteredPlayers] = useState<IPlayer[]>([]);
  const [teamName, setTeamName] = useState('');
  const [selectingTeamId, setSelectingTeamId] = useState('');
  const [teams, setTeams] = useState<TeamSelection>({});
  const [selectedPlayers, setSelectedPlayers] = useState<number[]>([]);
  const [isTeamsSet, setIsTeamsSet] = useState(false);
  const { completeDraft } = useCompleteDraft();

  const { data: leagueInfo, isLoading: isFetchingLeagueInfo }: { data: ILeagueInfo; isLoading: boolean } = useFetchLeagueInfo(leagueId);
  const { data, isLoading } = useFetchAllPlayers(leagueId, leagueInfo?.leagueStatus === LeagueStatus.Draft);
  const players = useMemo(() => data ?? [], [data]);

  const user = useSelector((state: RootState) => state.user.user);

  useEffect(() => {
    if (isTeamsSet) {
      completeDraft({ leagueId, nbaPlayersId: teams });
    }
  }, [isTeamsSet]);

  useEffect(() => {
    if (!isLoading) {
      setFilteredPlayers(players);
    }
  }, [isLoading, players]);

  useEffect(() => {
    if (leagueInfo) {
      setSelectingTeamId(leagueInfo.allTeams[0].id);
    }
  }, [leagueInfo]);

  useEffect(() => {
    if (leagueInfo) {
      setFilteredPlayers((prevPlayers) => prevPlayers.filter((player) => !selectedPlayers.includes(player.playerId)));
      if (selectedPlayers.length === leagueInfo.allTeams.length * 8) setIsTeamsSet(true);
    }
  }, [selectedPlayers]);

  const memoTeams = useMemo(() => {
    if (!players) return [];
    const teamsSet = players.reduce<Set<string>>((acc, player) => {
      return acc.add(player.team);
    }, new Set<string>());

    return Array.from(teamsSet);
  }, [players]);

  useEffect(() => {
    filterPlayers();
  }, [positionsFilters, teamName]);

  const filterPlayers = () => {
    let newFilteredArray: IPlayer[] = JSON.parse(JSON.stringify(players));
    newFilteredArray = newFilteredArray.filter((player) => !selectedPlayers.includes(player.playerId));

    if (positionsFilters.length > 0) {
      newFilteredArray = newFilteredArray.filter((player) => positionsFilters.includes(player.poS1) || positionsFilters.includes(player.poS2));
    }

    if (teamName !== '') {
      newFilteredArray = newFilteredArray.filter((player) => player.team === teamName);
    }

    setFilteredPlayers(newFilteredArray);
  };

  const handlePositionCheck = ({ checked, values }: { checked: boolean; values: string[] }) => {
    if (checked) setPositionsFilters((currentFilters) => [...currentFilters, ...values]);
    else {
      setPositionsFilters((currentFilters) => currentFilters.filter((filter) => !values.includes(filter)));
    }
  };

  const handlePlayerSelection = (playerId) => {
    console.log(`Team with id ${selectingTeamId} selected player with id ${playerId}`);
    setTeams((prevTeams) => ({ ...prevTeams, [selectingTeamId]: [...(prevTeams[selectingTeamId] ?? []), playerId] }));
    setSelectedPlayers((prev) => [...prev, playerId]);

    moveToNextTeamPick();
  };

  const moveToNextTeamPick = () => {
    const currentSelectingIndex = leagueInfo.allTeams.findIndex((team) => team.id === selectingTeamId);

    if (currentSelectingIndex === -1) {
      alert('Failed to move to next team pick');
      return;
    }

    const nextSelectingIndex = (currentSelectingIndex + 1) % leagueInfo.allTeams.length;
    setSelectingTeamId(leagueInfo.allTeams[nextSelectingIndex].id);
  };

  if (isFetchingLeagueInfo) return <Loader />;

  if (leagueInfo.leagueStatus === LeagueStatus.Ready) {
    return <Redirect to={GlobalPaths.myTeamUrl} />;
  }

  return (
    <>
      <div className="players-filters middle-column">
        <div className="players-filters-title">
          <h1>Draft Event</h1>
          <span>{leagueInfo?.name ?? 'N/A'}</span>
        </div>
        <PlayersPositionsFilter onChange={handlePositionCheck} selectedPositions={positionsFilters} />
        <div className="players-filters-select">
          <SelectInput label="Teams" items={memoTeams} onChange={(e) => setTeamName((e.target as HTMLInputElement).value)} />
        </div>
      </div>

      {leagueInfo && (
        <div className="turns-wrapper middle-column">
          {leagueInfo.allTeams.map((team) => (
            <TeamSelectionBox key={team.id} team={team} numberOfSelectedPlayers={teams[team.id]?.length ?? 0} isActive={selectingTeamId === team.id} />
          ))}
        </div>
      )}

      <div className="players-main middle-column">
        {leagueInfo?.leagueStatus === LeagueStatus.Init ? (
          <p>Waiting for other players to join the league before starting the draft event</p>
        ) : !user.isAdmin ? (
          <p>Draft event is live! Talk with your league admin to start the draft</p>
        ) : !isTeamsSet ? (
          <PlayersTable headers={headers} players={filteredPlayers} callback={handlePlayerSelection} />
        ) : (
          <p>Finish</p>
        )}
      </div>
    </>
  );
};

export default DraftPage;
