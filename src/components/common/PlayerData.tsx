import React from 'react';
import { IPlayer } from '../../models/Player/PlayerModels';

interface Props {
  playerData: IPlayer;
  callback?: (...args) => void;
}

const PlayerInfo: React.FC<Props> = ({ playerData, callback = () => true }) => {
  return (
    <td className="player-info">
      {playerData.imagePath && <img src={playerData.imagePath} alt={playerData.firstName} />}
      <div className="player-basic">
        <h4>{`${playerData.firstName} ${playerData.lastName}`}</h4>
        <p>{playerData.team.toUpperCase()}</p>
        <p>
          {playerData.poS1} {playerData.poS2 && `- ${playerData.poS2}`}{' '}
        </p>
      </div>
      <button className="player-cta" onClick={() => callback(playerData.playerId)}>
        +
      </button>
    </td>
  );
};

export default PlayerInfo;
