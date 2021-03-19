import React from 'react';

const positions = ['PG', 'SG', 'SF', 'PF', 'C', 'G', 'F'];

interface Props {
  selectedPositions: string[];
  onChange: ({ checked, values }: { checked: boolean; values: string[] }) => void;
}

const PlayersPositionsFilter: React.FC<Props> = ({ selectedPositions, onChange }) => {
  const handlePositionClick = (e: React.SyntheticEvent) => {
    const { value, checked } = e.target as HTMLInputElement;
    let values = [value];

    if (value === 'G') {
      values = [...values, 'PG', 'SG'];
    } else if (value === 'F') {
      values = [...values, 'PF', 'SF'];
    }

    onChange({ checked, values });
  };

  return (
    <div className="players-positions">
      <h2 className="players-positions-title">Positions</h2>
      <ul>
        {positions.map((position) => (
          <li key={position}>
            <input className="position-checkbox" type="checkbox" id={position} value={position} onChange={handlePositionClick} checked={selectedPositions.includes(position)} />
            <label className="position-label" htmlFor={position}>
              {position}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayersPositionsFilter;
