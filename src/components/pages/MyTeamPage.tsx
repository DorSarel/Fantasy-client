import React, { useEffect, useMemo, useState } from 'react';
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
import { useSimulateSeason } from '../../hooks/useSimulateSeason';

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
      },
    ],
  },
  {
    key: 'Avg',
  },
];

const MyTeam = () => {
  const [teamId, setTeamId] = useState('');
  const { leagueId, userId, isAdmin } = useSelector((state: RootState) => state.user.user);
  const { data: leagueInfo, isLoading: isFetchingLeagueInfo }: { data: ILeagueInfo; isLoading: boolean } = useFetchLeagueInfo(leagueId);
  const { data: team, isLoading }: { data: ITeamResponse; isLoading: boolean } = useFetchTeamById(leagueId, teamId);
  const { simulateSeason } = useSimulateSeason(leagueId, teamId);

  const teamMatchups = useMemo(() => {
    if (leagueInfo && teamId) {
      const myTeam = leagueInfo.allTeams.filter((team) => team.id === teamId)[0];
      return myTeam.matchups;
    }
  }, [leagueInfo, teamId]);

  const topScorers = useMemo(() => {
    if (team) {
      const copiedArray = [...team.players];
      copiedArray.sort((playerA, playerB) => playerB.pts - playerA.pts);

      return copiedArray.slice(0, 3);
    }
  }, [team]);

  const topRebounders = useMemo(() => {
    if (team) {
      const copiedArray = [...team.players];
      copiedArray.sort((playerA, playerB) => playerB.reb - playerA.reb);

      return copiedArray.slice(0, 3);
    }
  }, [team]);

  useEffect(() => {
    if (leagueInfo) {
      const id = leagueInfo.allTeams.filter((team) => team.userId === userId)[0].id;
      setTeamId(id);
    }
  }, [leagueInfo]);

  if (isFetchingLeagueInfo || isLoading) return <Loader />;

  return team ? (
    <>
      <div className="left-column articles">
        <div className="bottom-boxes">
          <ListViewComponent header="Top Scorers:" players={topScorers} keyToShow={'pts'} />
          <ListViewComponent header="Top Rebounders:" players={topRebounders} keyToShow={'reb'} />
        </div>
      </div>
      <div className="middle-column main-div">
        <div className="team-data">
          <img className="hoopers" src={hoopers} alt="hoopers" />
          <div className="team-data__info">
            <div className="team-data__text">
              <p className="team-data__name">{team.name}</p>
              <div className="team-data__dry-info">
                <p className="team-data__user">Dor Sarel</p>
                <p className="team-data__season">{leagueInfo.name} 20/21</p>
              </div>
            </div>
            <p className="team-data__position">{team.positionInLeague}</p>
          </div>
        </div>
        <PlayersTable headers={headers} players={team.players} />
      </div>
      <div className="right-column matchups">
        {isAdmin && <button onClick={() => simulateSeason()}>Simulate</button>}
        {teamMatchups.length > 0 &&
          teamMatchups.map((matchup) => {
            return (
              <div key={matchup.id} className="matchup">
                <p>
                  {matchup.homeTeamMatchupData.teamName} - {matchup.homeTeamMatchupData.teamScore} - {matchup.homeTeamMatchupData.isWinner ? 'W' : 'L'}
                </p>
                <p>
                  {matchup.guestTeamMatchupData.teamName} - {matchup.guestTeamMatchupData.teamScore} - {matchup.guestTeamMatchupData.isWinner ? 'W' : 'L'}
                </p>
              </div>
            );
          })}
      </div>
    </>
  ) : null;
};
export default MyTeam;
