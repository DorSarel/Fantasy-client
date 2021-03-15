import React, { useState } from 'react';
import SelectInput from '../common/SelectInput';
import ToggleCheckbox from '../common/ToggleCheckbox';
import PlayersPositionsFilter from '../PlayersPage/PlayersPositionsFilter';

const PlayersPage = () => {
  const [isRosteredVisible, setRosteredVisible] = useState(false);
  const [positionsFilters, setPositionsFilters] = useState<string[]>([]);

  const handleRosteredPlayers = (e: React.SyntheticEvent) => {
    const { checked } = e.target as HTMLInputElement;
    if (checked) setRosteredVisible(true);
    else setRosteredVisible(false);
  };

  const handlePositionCheck = (e: React.SyntheticEvent) => {
    const { value, checked } = e.target as HTMLInputElement;

    if (checked) setPositionsFilters((currentFilteredPositions) => [...currentFilteredPositions, value]);
    else setPositionsFilters((currentFilteredPositions) => currentFilteredPositions.filter((position) => position !== value));
  };

  return (
    <>
      <div className="players-filters left-column">
        <h1>Filters</h1>
        <ToggleCheckbox label="Show rostered players" isChecked={isRosteredVisible} onChange={handleRosteredPlayers} />
        <PlayersPositionsFilter onChange={handlePositionCheck} />
        <SelectInput label="Teams" />
        <SelectInput label="Games Count" />
      </div>
      <div className="players-main">This is the players table</div>
    </>
  );
};

export default PlayersPage;
