import React, { useState } from 'react';
import PlayersPositionsFilter from '../PlayersPage/PlayersPositionsFilter';

const PlayersPage = () => {
  const [positionsFilters, setPositionsFilters] = useState<string[]>([]);

  const handlePositionCheck = (e: React.SyntheticEvent) => {
    const { value, checked } = e.target as HTMLInputElement;

    if (checked) setPositionsFilters((currentFilteredPositions) => [...currentFilteredPositions, value]);
    else setPositionsFilters((currentFilteredPositions) => currentFilteredPositions.filter((position) => position !== value));
  };

  return (
    <>
      <div className="players-filters left-column">
        <h1>Filters</h1>
        <PlayersPositionsFilter onChange={handlePositionCheck} />
      </div>
      <div className="players-main">This is the players table</div>
    </>
  );
};

export default PlayersPage;
