import React from 'react';
import { IPlayer } from '../../models/Player/PlayerModels';

interface Props {
  header: string;
  players?: IPlayer[];
  keyToShow?: string;
}

const ListViewComponent: React.FC<Props> = ({ header, players, keyToShow }) => {
  return (
    <div className="global-list">
      <ul className="list">
        <li key={Date.now()} className={'list__header'}>
          {header}
        </li>
        {players?.map((player) => (
          <li key={player.playerId} className="list__player">
            <img src={player.imagePath} alt={player.player} />
            <div className="list__personal">
              <p>{player.player}</p>
              <span>{player.team.toUpperCase()}</span>
            </div>
            <p className="list__score">{player[keyToShow]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListViewComponent;
