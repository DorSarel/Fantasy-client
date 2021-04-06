import React from 'react';
import { IPlayer } from '../../models/Player/PlayerModels';

interface Props {
  playerData: IPlayer;
}

const PlayerInfo: React.FC<Props> = ({ playerData }) => {
  return (
    <td className="player-info">
      <img src="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6606.png" alt={playerData.firstName} />
      <div className="player-basic">
        <h4>{`${playerData.firstName} ${playerData.lastName}`}</h4>
        <p>{playerData.teamName.substring(0, 3).toUpperCase()}</p>
        <p>{playerData.leagues.standard.pos}</p>
      </div>
    </td>
  );
};

export default PlayerInfo;
