import React from 'react';
import { ITeam } from '../../models/League/LeagueModels';

interface Props {
  team: ITeam;
  numberOfSelectedPlayers: number;
  isActive: boolean;
}

const NUM_PLAYERS_TO_SELECT = 8;

const TeamSelectionBox: React.FC<Props> = ({ team, numberOfSelectedPlayers, isActive }) => {
  return (
    <div className={`team-selection-box ${isActive ? 'team-selection-box-active' : ''}`}>
      <p>{team.name}</p>
      <span>{`${numberOfSelectedPlayers}/${NUM_PLAYERS_TO_SELECT}`}</span>
    </div>
  );
};

export default TeamSelectionBox;
