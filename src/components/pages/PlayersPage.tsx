import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import SelectInput from '../common/SelectInput';
import ToggleCheckbox from '../common/ToggleCheckbox';
import PlayersPositionsFilter from '../PlayersPage/PlayersPositionsFilter';
import * as PlayerActions from '../../redux/playerSlice';
import { IPlayer } from '../../models/Player/PlayerModels';
import PlayersTable from '../common/PlayersTable';

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
    playerId: 1,
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
    playerId: 1,
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
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(PlayerActions.fetchPlayers());
  // }, []);

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
          <span>League name...</span>
        </div>
        <PlayersPositionsFilter onChange={handlePositionCheck} selectedPositions={positionsFilters} />
        <div className="players-filters-select">
          <SelectInput label="Teams" />
          <SelectInput label="Weekly Games" />
          <SelectInput label="Available" />
          <SelectInput label="Healthy" />
        </div>
      </div>
      <div className="players-main middle-column">
        <PlayersTable players={players} />
      </div>
    </>
  );
};

export default PlayersPage;


