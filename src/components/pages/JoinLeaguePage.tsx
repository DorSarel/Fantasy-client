import { Button, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import { JoinLeagueRequest } from '../../models/League/LeagueModels';
import { RootState } from '../../redux';
import { IsGoogleLoggedIn } from '../../utils/helpers';
import { GlobalPaths } from '../common/GlobalPath';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  teamName: '',
  nickName: '',
};

const JoinLeaguePage = () => {
  const { leagueId } = useParams<{ leagueId: string }>();
  const [member, setMember] = useState(initialState);
  const user = useSelector((store: RootState) => store.user.user);
  const isLoggedIn = IsGoogleLoggedIn(user);
  const leagueName = 'Salmon';

  // TODO: send query to get data about the league

  const onMemberChange = (e) => {
    const { name, value } = e.target;

    setMember((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onJoinLeague = () => {
    const request: JoinLeagueRequest = {
      ...member,
      googleTokenId: user.googleId,
      leagueId,
    };

    // TODO: add mutation to update server
  };

  if (isLoggedIn) <Redirect to={GlobalPaths.myTeamUrl} />;

  return (
    <div className="middle-column">
      <div className="jumbo">
        <Typography variant="h2">
          {leagueName} league is looking for you!<br></br> Join us now!
        </Typography>
      </div>
      <div>
        <div className="league-invite-tile league-creator">
          <TextField
            inputProps={{ style: { fontSize: '1.5rem' } }}
            autoComplete="off"
            size="medium"
            label="First Name"
            name="firstName"
            value={member.firstName}
            onChange={onMemberChange}
            variant="outlined"
          />
          <TextField
            inputProps={{ style: { fontSize: '1.5rem' } }}
            autoComplete="off"
            size="medium"
            label="Last Name"
            name="lastName"
            value={member.lastName}
            onChange={onMemberChange}
            variant="outlined"
          />
          <TextField
            inputProps={{ style: { fontSize: '1.5rem' } }}
            autoComplete="off"
            size="medium"
            label="Email"
            name="email"
            value={member.email}
            onChange={onMemberChange}
            variant="outlined"
          />
          <TextField
            inputProps={{ style: { fontSize: '1.5rem' } }}
            autoComplete="off"
            size="medium"
            label="Team Name"
            name="teamName"
            value={member.teamName}
            onChange={onMemberChange}
            variant="outlined"
          />
          <TextField
            inputProps={{ style: { fontSize: '1.5rem' } }}
            autoComplete="off"
            size="medium"
            label="Nick Name"
            name="nickName"
            value={member.nickName}
            onChange={onMemberChange}
            variant="outlined"
          />
          <Button variant="outlined" color="default" size="large">
            Join League
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JoinLeaguePage;
