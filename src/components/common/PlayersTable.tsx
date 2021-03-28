import React from 'react';
import { IPlayer } from '../../models/Player/PlayerModels';
import { useTable } from 'react-table';

interface Props {
  players: IPlayer[];
}

const PlayersTable: React.FC<Props> = ({ players }) => {
  const data = React.useMemo(() => {
    return players.map((h) => {
      return {
        player: h.firstName + ' ' + h.lastName,
        avg: 34.8,
        weeklyGames: h.weeklyGames,
        stats: '',
        total: 40,
      };
    });
  }, [players]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Player',
      },
      {
        Header: 'Avg',
      },
      {
        Header: 'Weekly Games',
      },
      {
        Header: 'Stats',
      },
      {
        Header: 'Total',
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  console.log(rows);
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => {
          return (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((header) => (
                <th {...header.getHeaderProps()}>{header.render('Header')}</th>
              ))}
            </tr>
          );
        })}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          console.log(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default PlayersTable;
