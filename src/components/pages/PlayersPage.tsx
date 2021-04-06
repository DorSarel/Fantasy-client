import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import SelectInput from '../common/SelectInput';
import ToggleCheckbox from '../common/ToggleCheckbox';
import PlayersPositionsFilter from '../PlayersPage/PlayersPositionsFilter';
import * as PlayerActions from '../../redux/playerSlice';
import { IPlayer } from '../../models/Player/PlayerModels';
import PlayersTable from '../common/PlayersTable';

// MOCK DATA
const players: IPlayer[] = [
  {
    firstName: 'Dor',
    lastName: 'Sarel',
    playerId: 1,
    teamName: 'Wizards',
    weeklyGames: 3,
    teamId: 23,
    heightInMeters: 1.72,
    leagues: {
      standard: {
        active: 'true',
        pos: 'SG',
        jersey: 6,
      },
    },
  },
  {
    firstName: 'Dor',
    lastName: 'Sarel',
    playerId: 2,
    teamName: 'Los Angels Lakers',
    weeklyGames: 3,
    teamId: 23,
    heightInMeters: 1.72,
    leagues: {
      standard: {
        active: 'true',
        pos: 'PF',
        jersey: 12,
      },
    },
  },
  {
    firstName: 'Dor',
    lastName: 'Sarel',
    playerId: 3,
    teamName: 'Los Angels Lakers',
    weeklyGames: 3,
    teamId: 23,
    heightInMeters: 1.72,
    leagues: {
      standard: {
        active: 'true',
        pos: 'SF',
        jersey: 12,
      },
    },
  },
  {
    firstName: 'Dor',
    lastName: 'Sarel',
    playerId: 4,
    teamName: 'Portland',
    weeklyGames: 5,
    teamId: 23,
    heightInMeters: 1.72,
    leagues: {
      standard: {
        active: 'true',
        pos: 'C',
        jersey: 9,
      },
    },
  },
];

const PlayersPage = () => {
  const [positionsFilters, setPositionsFilters] = useState<string[]>([]);
  const [filteredPlayers, setFilteredPlayers] = useState<IPlayer[]>(players);
  const [teamName, setTeamName] = useState('');
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(PlayerActions.fetchPlayers());
  // }, []);

  const memoTeams = useMemo(() => {
    const teamsSet = players.reduce<Set<string>>((acc, player) => {
      return acc.add(player.teamName);
    }, new Set<string>());

    return Array.from(teamsSet);
  }, [players]);

  useEffect(() => {
    filterPlayers();
  }, [positionsFilters, teamName]);

  const filterPlayers = () => {
    let newFilteredArray: IPlayer[] = JSON.parse(JSON.stringify(players));

    if (positionsFilters.length > 0) {
      newFilteredArray = newFilteredArray.filter((player) => positionsFilters.includes(player.leagues.standard.pos));
    }

    if (teamName !== '') {
      newFilteredArray = newFilteredArray.filter((player) => player.teamName === teamName);
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
          <SelectInput label="Weekly Games" />
          <SelectInput label="Available" />
          <SelectInput label="Healthy" />
        </div>
      </div>
      <div className="players-main middle-column">
        <PlayersTable players={filteredPlayers} />
      </div>
    </>
  );
};

export default PlayersPage;
