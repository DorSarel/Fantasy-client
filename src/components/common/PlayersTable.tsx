import React from 'react';
import { IPlayer } from '../../models/Player/PlayerModels';
import PlayerInfo from './PlayerData';

interface IHeader {
  key: string;
  subHeaders?: IHeader[];
}

interface Props {
  players: IPlayer[];
  headers: IHeader[];
  callback?: (...args) => void;
}

const PlayersTable: React.FC<Props> = ({ headers, players, callback = () => true }) => {
  const data = React.useMemo(
    () =>
      players.map((player) => {
        return {
          player: player,
          avg: 30,
          weeklyGames: player.weeklyGames,
          stats: '',
          total: 52.5,
          id: player.playerId,
        };
      }),
    [players]
  );

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {headers.map((header) => {
              if (!header.subHeaders)
                return (
                  <th key={header.key} rowSpan={2}>
                    {header.key}
                  </th>
                );

              return (
                <th key={header.key} colSpan={header.subHeaders.length}>
                  {header.key}
                </th>
              );
            })}
          </tr>
          <tr>
            {headers.map((header) => {
              if (!header.subHeaders) return null;

              return header.subHeaders.map((subHeader) => (
                <th key={subHeader.key} className="table-sub-header">
                  {subHeader.key}
                </th>
              ));
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((playerData) => (
            <tr className="table-body-row" key={playerData.id}>
              <PlayerInfo playerData={playerData.player} callback={callback} />
              <td style={{ width: '5rem' }}>{playerData.avg}</td>
              <td style={{ width: '10rem' }}>{playerData.weeklyGames}</td>
              <td>{playerData.stats}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>{playerData.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayersTable;
