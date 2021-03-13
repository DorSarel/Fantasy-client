import React from 'react';

const positions = ['PG', 'SG', 'SF', 'PF', 'C', 'G', 'F'];

interface Props {
  onChange: (e: React.SyntheticEvent) => void;
}

const PlayersPositionsFilter: React.FC<Props> = ({ onChange }) => {
  return (
    <div className="players-positions">
      <h2 className="players-positions-title">Positions</h2>
      <ul>
        {positions.map((position) => (
          <li key={position}>
            <input className="position-checkbox" type="checkbox" id={position} value={position} onChange={onChange} />
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
