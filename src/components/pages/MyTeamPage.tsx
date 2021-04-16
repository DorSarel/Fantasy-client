import React, { useEffect, useState } from 'react';
import Medal from '../../assets/images/medal.png';
import hoopers from '../../assets/images/hoopers.png';
import MediaBox from '../common/MediaBox';
import ListViewComponent from '../common/ListView';
import CardsSlider from '../common/Slider';
import PlayersTable from '../common/PlayersTable';
import { IPlayer } from '../../models/Player/PlayerModels';

const headers = [
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
];

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
    playerId: 2,
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
    playerId: 3,
    teamName: 'Los Angels Lakers',
    weeklyGames: 3,
    teamId: 23,
    heightInMeters: 1.72,
    leagues: {
      standard: {
        active: 'true',
        pos: 'SF',
        jersey: 12,
      },
    },
  },
  {
    firstName: 'Dor',
    lastName: 'Sarel',
    playerId: 4,
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
      <div className="left-column articles">
        <h2>Articles: </h2>
        <MediaBox />
        <MediaBox />
        <div className="bottom-boxes">
          <ListViewComponent header="Hottest Free Agents: " />
          <ListViewComponent header="Trending Free Agents: " />
        </div>
      </div>
      <div className="middle-column main-div">
        <img className="hoopers" src={hoopers} />
        <div className="main-div-text">
          <p>Team Hoopers</p>
          <p>Israeli team</p>
          <p>League name 20/21</p>
          <div className="left-text">
            <img src={Medal} />
            <p>2nd</p>
            <span>7-3-0</span>
          </div>
        </div>
        <div className="slider-main">
          <CardsSlider />
        </div>
        <PlayersTable headers={headers} players={players} />
      </div>

      <div className="right-column weekly-recap">
        <span>Weekly recap: </span>
        <p className="border"></p>
        <div className="twitter-box">
          <MediaBox />
        </div>
      </div>
    </>
  );
};
export default MyTeam;
