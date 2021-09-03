import React, { useEffect, useState } from 'react';
import Medal from '../../assets/images/medal.png';
import hoopers from '../../assets/images/hoopers.png';
import MediaBox from '../common/MediaBox';
import ListViewComponent from '../common/ListView';
import CardsSlider from '../common/Slider';
import PlayersTable from '../common/PlayersTable';

import { useFetchLeagueInfo } from '../../hooks/useFetchLeagueInfo';
import { ILeagueInfo, LeagueStatus } from '../../models/League/LeagueModels';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import Loader from '../common/Loader';
import { useFetchTeamById } from '../../hooks/useFetchTeamById';
import { ITeamResponse } from '../../models/Team/TeamsModel';
import { useFetchTopPlayers } from '../../hooks/useFetchTopPlayers';

const headers = [
  {
    key: 'Player',
  },
  {
    key: 'Stats',
    subHeaders: [
      {
        key: 'MIN',
      },
      {
        key: 'FGMI',
      },
      {
        key: 'FTMI',
      },
      {
        key: 'TPM',
      },
      {
        key: 'REB',
      },
      {
        key: 'AST',
      },
      {
        key: 'STL',
      },
      {
        key: 'BLK',
      },
      {
        key: 'TO',
      },
      {
        key: 'PTS',
      }
    ],
  },
  {
    key: 'Avg',
  },
];

const MyTeam = () => {
  const [teamId, setTeamId] = useState('');
  const { leagueId, userId } = useSelector((state: RootState) => state.user.user);
  const { data: leagueInfo, isLoading: isFetchingLeagueInfo }: { data: ILeagueInfo; isLoading: boolean } = useFetchLeagueInfo(leagueId);
  const {data: team, isLoading}: {data: ITeamResponse, isLoading: boolean} = useFetchTeamById(leagueId, teamId);
  const {data: players, isLoading: isFetchingTopPlayers} = useFetchTopPlayers();
  
  useEffect(() => {
    if (leagueInfo) {
      const id = leagueInfo.allTeams.filter((team) => team.userId === userId)[0].id;
      setTeamId(id);
    }
  }, [leagueInfo])

  if (isFetchingLeagueInfo || isLoading || isFetchingTopPlayers) return <Loader />
  
  return ( team ? 
    <>
      <div className="left-column articles">
        {/* <h2>Articles: </h2>
        <MediaBox />
        <MediaBox /> */}
        <div className="bottom-boxes">
          <ListViewComponent header="Top Scorers:" players={players.topScorers} keyToShow={"pts"} />
          <ListViewComponent header="Top Rebounders:" players={players.topRebounds} keyToShow={"reb"} />
        </div>
      </div>
      <div className="middle-column main-div">
        <img className="hoopers" src={hoopers} alt="hoopers" />
        <div className="main-div-text">
          <p>{team.name}</p>
          <p>Dor Sarel</p>
          <p>{leagueInfo.name} 20/21</p>
          <div className="left-text">
            <img src={Medal} alt="Medal" />
            <p>{team.positionInLeague}</p>
          </div>
        </div>
        <div className="slider-main">
          <CardsSlider />
        </div>
        <PlayersTable headers={headers} players={team.players} />
      </div>
        
      {/* TODO: Simulation button */}

    </> : null
  );
};
export default MyTeam;
