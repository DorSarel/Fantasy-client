import React from 'react';
import { IPlayer } from '../../models/Player/PlayerModels';
import PlayersTable from '../common/PlayersTable';

const players: IPlayer[] = [
    {
      firstName: 'Dor',
      lastName: 'Sarel',
      playerId: 1,
      teamName: 'Wizards',
      weeklyGames: 3,
      teamId: 23,
      heightInMeters: 1.72,
      leagues: {
        standard: {
          active: 'true',
          pos: 'SG',
          jersey: 6,
        },
      },
    },
    {
      firstName: 'Dor',
      lastName: 'Sarel',
      playerId: 1,
      teamName: 'Los Angels Lakers',
      weeklyGames: 3,
      teamId: 23,
      heightInMeters: 1.72,
      leagues: {
        standard: {
          active: 'true',
          pos: 'PF',
          jersey: 12,
        },
      },
    },
    {
      firstName: 'Dor',
      lastName: 'Sarel',
      playerId: 1,
      teamName: 'Portland',
      weeklyGames: 5,
      teamId: 23,
      heightInMeters: 1.72,
      leagues: {
        standard: {
          active: 'true',
          pos: 'C',
          jersey: 9,
        },
      },
    },
  ];

const MyTeam = () => {
    return (
        <>
            <div className="middle-column tabel">
              <PlayersTable players={players} />
            </div>
            </>
    );
};
export default MyTeam;
