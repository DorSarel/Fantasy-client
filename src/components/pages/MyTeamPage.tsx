import React from 'react';
import Medal from '../../assets/images/medal.png';
import hoopers from '../../assets/images/hoopers.png';
import MediaBox from '../common/MediaBox';
import ListViewComponent from '../common/ListView';
import CardsSlider from '../common/Slider';
import PlayersTable from '../common/PlayersTable';
// import { IPlayer } from '../../models/Player/PlayerModels';

// Mock Data
import teams from '../../mocks/teams.json';

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

const MyTeam = () => {
  const myTeam = teams[0]; // TODO - this is mock data
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
        <img className="hoopers" src={hoopers} alt="hoopers" />
        <div className="main-div-text">
          <p>{myTeam.name}</p>
          <p>Dor Sarel</p>
          <p>{myTeam.league_name} 20/21</p>
          <div className="left-text">
            <img src={Medal} alt="Medal" />
            <p>2nd</p>
            <span>
              {myTeam.stats.games_won}-{myTeam.stats.games_lost}
            </span>
          </div>
        </div>
        <div className="slider-main">
          <CardsSlider />
        </div>
        <PlayersTable headers={headers} players={myTeam.players} />
      </div>

      <div className="right-column weekly-recap">
        <span>Weekly recap: </span>
        <hr />
        <p className="border"></p>
        <div className="twitter-box">
          <MediaBox />
        </div>
      </div>
    </>
  );
};
export default MyTeam;
