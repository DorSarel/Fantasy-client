import React from 'react';
import { IPlayer } from '../../models/Player/PlayerModels';

interface Props {
  players: IPlayer[];
}

const PlayersTable: React.FC<Props> = ({ players }) => {
  const headers = React.useMemo(
    () => [
      {
        key: 'Player',
      },
      {
        key: 'Avg',
      },
      {
        key: 'Weekly Games',
      },
      {
        key: 'Stats',
        subHeaders: [
          {
            key: 'PPG',
          },
          {
            key: 'RPG',
          },
          {
            key: 'FGP',
          },
        ],
      },
      {
        key: 'Total',
      },
    ],
    []
  );
  const data = React.useMemo(
    () =>
      players.map((player) => {
        return {
          player: player.firstName,
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
              if (!header.subHeaders) return <th rowSpan={2}>{header.key}</th>;

              return <th colSpan={header.subHeaders.length}>{header.key}</th>;
            })}
          </tr>
          <tr>
            {headers.map((header) => {
              if (!header.subHeaders) return null;

              return header.subHeaders.map((subHeader) => <th>{subHeader.key}</th>);
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((playerData) => (
            <tr className="table-body-row" key={playerData.id}>
              <td>{playerData.player}</td>
              <td>{playerData.avg}</td>
              <td>{playerData.weeklyGames}</td>
              <td>{playerData.stats}</td>
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
