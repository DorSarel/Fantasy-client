import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import SelectInput from '../common/SelectInput';
import ToggleCheckbox from '../common/ToggleCheckbox';
import PlayersPositionsFilter from '../PlayersPage/PlayersPositionsFilter';
import * as PlayerActions from '../../redux/playerSlice';
import { IPlayer } from '../../models/Player/PlayerModels';

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
  const [isRosteredVisible, setRosteredVisible] = useState(false);
  const [positionsFilters, setPositionsFilters] = useState<string[]>([]);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(PlayerActions.fetchPlayers());
  // }, []);

  const handleRosteredPlayers = (e: React.SyntheticEvent) => {
    const { checked } = e.target as HTMLInputElement;
    if (checked) setRosteredVisible(true);
    else setRosteredVisible(false);
  };

  const handlePositionCheck = ({ checked, values }: { checked: boolean; values: string[] }) => {
    if (checked) setPositionsFilters((currentFilters) => [...currentFilters, ...values]);
    else {
      setPositionsFilters((currentFilters) => currentFilters.filter((filter) => !values.includes(filter)));
    }
  };

  return (
    <>
      <div className="players-filters left-column">
        <h1>Filters</h1>
        <ToggleCheckbox label="Show rostered players" isChecked={isRosteredVisible} onChange={handleRosteredPlayers} />
        <PlayersPositionsFilter onChange={handlePositionCheck} selectedPositions={positionsFilters} />
        <SelectInput label="Teams" />
        <SelectInput label="Weekly Games" />
      </div>
      <div className="players-main fill-2-columns">This is the players table</div>
    </>
  );
};

export default PlayersPage;
