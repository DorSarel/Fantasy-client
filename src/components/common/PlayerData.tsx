import React from 'react';
import { IPlayer } from '../../models/Player/PlayerModels';

interface Props {
  playerData: IPlayer;
  callback?: (...args) => void;
}

const PlayerInfo: React.FC<Props> = ({ playerData, callback = () => true }) => {
  return (
    <td className="player-info">
      <img src={playerData.ImagePath} alt={playerData.firstName} />
      <div className="player-basic">
        <h4>{`${playerData.firstName} ${playerData.lastName}`}</h4>
        <p>{playerData.team.toUpperCase()}</p>
        <p>{playerData.pos1} {playerData.pos2 && `- ${playerData.pos2}`} </p>
      </div>
      <button className="player-cta" onClick={() => callback(playerData.playerId)}>
        +
      </button>
    </td>
  );
};

export default PlayerInfo;
