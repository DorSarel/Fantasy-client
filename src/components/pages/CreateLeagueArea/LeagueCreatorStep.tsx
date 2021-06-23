import React from 'react';
import { LeagueCreator } from '../../../models/League/LeagueModels';

interface Props {
  leagueCreator: LeagueCreator;
  handleCreatorChange: (e) => void;
}

const LeagueCreatorStep: React.FC<Props> = ({ leagueCreator, handleCreatorChange }) => {
  return (
    <div>
      <div className="league-invite-tile league-creator">
        <div className="tile-form">
          <label>First Name:</label>
          <input type="text" name="firstName" value={leagueCreator.firstName} onChange={handleCreatorChange} />
        </div>
        <div className="tile-form">
          <label>Last Name:</label>
          <input type="text" name="lastName" value={leagueCreator.lastName} onChange={handleCreatorChange} />
        </div>
        <div className="tile-form">
          <label>Email:</label>
          <input type="email" name="email" value={leagueCreator.email} onChange={handleCreatorChange} />
        </div>
        <div className="tile-form">
          <label>Team Name:</label>
          <input type="text" name="teamName" value={leagueCreator.teamName} onChange={handleCreatorChange} />
        </div>
        <div className="tile-form">
          <label>Nickname:</label>
          <input type="text" name="nickName" value={leagueCreator.nickName} onChange={handleCreatorChange} />
        </div>
      </div>
    </div>
  );
};

export default LeagueCreatorStep;
