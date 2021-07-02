import { TextField } from '@material-ui/core';
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
        <TextField
          inputProps={{ style: { fontSize: '1.5rem' } }}
          autoComplete="off"
          size="medium"
          label="First Name"
          name="firstName"
          value={leagueCreator.firstName}
          onChange={handleCreatorChange}
          variant="outlined"
        />
        <TextField
          inputProps={{ style: { fontSize: '1.5rem' } }}
          autoComplete="off"
          size="medium"
          label="Last Name"
          name="lastName"
          value={leagueCreator.lastName}
          onChange={handleCreatorChange}
          variant="outlined"
        />
        <TextField
          inputProps={{ style: { fontSize: '1.5rem' } }}
          autoComplete="off"
          size="medium"
          label="Email"
          name="email"
          value={leagueCreator.email}
          onChange={handleCreatorChange}
          variant="outlined"
        />
        <TextField
          inputProps={{ style: { fontSize: '1.5rem' } }}
          autoComplete="off"
          size="medium"
          label="Team Name"
          name="teamName"
          value={leagueCreator.teamName}
          onChange={handleCreatorChange}
          variant="outlined"
        />
        <TextField
          inputProps={{ style: { fontSize: '1.5rem' } }}
          autoComplete="off"
          size="medium"
          label="Nick Name"
          name="nickName"
          value={leagueCreator.nickName}
          onChange={handleCreatorChange}
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default LeagueCreatorStep;
