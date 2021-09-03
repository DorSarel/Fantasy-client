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
          {players.map((playerData) => (
            <tr className="table-body-row" key={playerData.playerId}>
              <PlayerInfo playerData={playerData} callback={callback} />
              <td>{playerData.min}</td>
              <td>{playerData.fgmi}</td>
              <td>{playerData.ftmi}</td>
              <td>{playerData.tpm}</td>
              <td>{playerData.reb}</td>
              <td>{playerData.ast}</td>
              <td>{playerData.stl}</td>
              <td>{playerData.blk}</td>
              <td>{playerData.to}</td>
              <td>{playerData.pts}</td>
              <td>{playerData.avg}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayersTable;
