import React from 'react';
import { IPlayer } from '../../models/Player/PlayerModels';
import PlayerInfo from './PlayerData';

interface Props {
  players: IPlayer[];
}

// MAKE IT MORE GENEREIC BY PASSING THE HEADERS AS PROPS

const MyTeamTabel: React.FC<Props> = ({ players }) => {
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
          {
            key: 'FGS',
          },
          {
            key: 'FGA',
          },
          {
            key: 'FGT',
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
              <PlayerInfo playerData={playerData.player} />
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

export default MyTeamTabel;
