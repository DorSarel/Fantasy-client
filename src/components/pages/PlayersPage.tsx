import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import SelectInput from '../common/SelectInput';
import PlayersPositionsFilter from '../PlayersPage/PlayersPositionsFilter';
import { IPlayer } from '../../models/Player/PlayerModels';
import PlayersTable from '../common/PlayersTable';
import { useFetchAllPlayers } from '../../hooks/useFetchPlayers';
import { RootState } from '../../redux';
import { ILeagueInfo, LeagueStatus } from '../../models/League/LeagueModels';
import { useFetchLeagueInfo } from '../../hooks/useFetchLeagueInfo';

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

const PlayersPage = () => {
  const { leagueId } = useSelector((state: RootState) => state.user.user);
  const { data: leagueInfo, isLoading: isFetchingLeagueInfo }: { data: ILeagueInfo; isLoading: boolean } = useFetchLeagueInfo(leagueId);
  const [positionsFilters, setPositionsFilters] = useState<string[]>([]);
  const [filteredPlayers, setFilteredPlayers] = useState<IPlayer[]>([]);
  const [teamName, setTeamName] = useState('');

  // TODO - use api to get all free players
  const { data, isLoading } = useFetchAllPlayers(leagueId, leagueInfo?.leagueStatus === LeagueStatus.Ready);
  const players = useMemo(() => data ?? [], [data]);

  useEffect(() => {
    if (!isLoading) {
      setFilteredPlayers(players);
    }
  }, [isLoading, players]);

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

  return (
    <>
      <div className="players-filters middle-column">
        <div className="players-filters-title">
          <h1>Players Board</h1>
          <span>Dor's league</span>
        </div>
        <PlayersPositionsFilter onChange={handlePositionCheck} selectedPositions={positionsFilters} />
        <div className="players-filters-select">
          <SelectInput label="Teams" items={memoTeams} onChange={(e) => setTeamName((e.target as HTMLInputElement).value)} />
        </div>
      </div>
      <div className="players-main middle-column">
        <PlayersTable headers={headers} players={filteredPlayers} />
      </div>
    </>
  );
};

export default PlayersPage;
