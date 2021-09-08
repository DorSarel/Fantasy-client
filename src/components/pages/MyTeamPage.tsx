import { useEffect, useMemo, useState } from 'react';
import hoopers from '../../assets/images/hoopers.png';
import ListViewComponent from '../common/ListView';
import PlayersTable from '../common/PlayersTable';

import { useFetchLeagueInfo } from '../../hooks/useFetchLeagueInfo';
import { ILeagueInfo } from '../../models/League/LeagueModels';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import Loader from '../common/Loader';
import { useFetchTeamById } from '../../hooks/useFetchTeamById';
import { ITeamResponse } from '../../models/Team/TeamsModel';
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
  const { simulateSeason, simulationLoading } = useSimulateSeason(leagueId, teamId);

  const teamMatchups = useMemo(() => {
    if (leagueInfo && teamId) {
      const myTeam = leagueInfo.allTeams.filter((team) => team.id === teamId)[0];
      return myTeam.matchups;
    }
  }, [leagueInfo, teamId]);

  const topPlayers = useMemo(() => {
    if (team) {
      const copiedArray = [...team.players];
      copiedArray.sort((playerA, playerB) => playerB.avg - playerA.avg);

      return copiedArray.slice(0, 3);
    }
  }, [team]);

  useEffect(() => {
    if (leagueInfo) {
      const id = leagueInfo.allTeams.filter((team) => team.userId === userId)[0].id;
      setTeamId(id);
    }
  }, [leagueInfo]);

  if (isFetchingLeagueInfo || isLoading || simulationLoading) return <Loader />;

  return team ? (
    <>
      <div className="left-column articles">
        <div className="board">
          <h2>League Board</h2>
          {leagueInfo &&
            leagueInfo.allTeams
              .sort((teamA, teamB) => teamA.positionInLeague - teamB.positionInLeague)
              .map((team) => (
                <div className="board__item">
                  <span className="board__position">{team.positionInLeague}</span>
                  <span className="board__name">{team.name}</span>
                  <span className="board__score">{team.numberOfWins}</span>
                </div>
              ))}
        </div>
        <ListViewComponent header="My Top Players:" players={topPlayers} keyToShow={'avg'} />
      </div>
      <div className="middle-column main-div">
        <div className="team-data">
          <img className="hoopers" src={hoopers} alt="hoopers" />
          <div className="team-data__info">
            <div className="team-data__text">
              <p className="team-data__name">{team.name}</p>
              <div className="team-data__dry-info">
                <p className="team-data__user">{team.owner}</p>
                <p className="team-data__season">{leagueInfo.name} 20/21</p>
              </div>
            </div>
            <p className="team-data__position">{team.positionInLeague}</p>
          </div>
        </div>
        <PlayersTable headers={headers} players={team.players} />
      </div>
      <div className="right-column matchups">
        {isAdmin && (
          <button className="matchups__simulate" onClick={() => simulateSeason()}>
            Simulate Games
          </button>
        )}
        {teamMatchups.length > 0 &&
          teamMatchups.map((matchup) => {
            const winClassName =
              (matchup.homeTeamMatchupData.isWinner && matchup.homeTeamMatchupData.teamId === teamId) ||
              (matchup.guestTeamMatchupData.isWinner && matchup.guestTeamMatchupData.teamId === teamId);
            return (
              <div key={matchup.id} className={`matchup ${winClassName ? 'matchup__win' : ''}`}>
                <div className="matchup__item">
                  <div className="matchup__team-score">
                    <span>{matchup.homeTeamMatchupData.teamName}</span> - <span>{matchup.homeTeamMatchupData.teamScore}</span>
                  </div>
                  <span className={`matchup__game-status`}>{matchup.homeTeamMatchupData.isWinner ? 'W' : 'L'}</span>
                </div>
                <div className="matchup__item">
                  <div className="matchup__team-score">
                    <span>{matchup.guestTeamMatchupData.teamName}</span> - <span>{matchup.guestTeamMatchupData.teamScore}</span>
                  </div>
                  <span className={`matchup__game-status`}>{matchup.guestTeamMatchupData.isWinner ? 'W' : 'L'}</span>
                </div>
              </div>
            );
          })}
      </div>
    </>
  ) : null;
};
export default MyTeam;
