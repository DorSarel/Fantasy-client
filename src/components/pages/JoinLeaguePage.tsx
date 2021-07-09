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

const INPUT_STYLE = {
  fontSize: '1.5rem',
  backgroundColor: '#fff',
  color: '#000',
};

const BUTTON_STYLE = {
  backgroundColor: '#fff',
  color: '#000',
  fontSize: 'inherit',
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

    console.log(request);
    // TODO: add mutation to update server
  };

  if (isLoggedIn) <Redirect to={GlobalPaths.myTeamUrl} />;

  return (
    <div className="middle-column join-league">
      <Typography variant="h1">Join league</Typography>
      <div className="jumbo">
        <Typography variant="h2">
          {leagueName} league is looking for you!<br></br> Join us now!
        </Typography>
        <img src="https://a.espncdn.com/photo/2020/0311/espn_fba_1296x729.jpg" alt="fantasy" />
      </div>
      <div className="league-invite-tile league-creator">
        <TextField
          inputProps={{ style: INPUT_STYLE }}
          autoComplete="off"
          size="medium"
          label="First Name"
          name="firstName"
          value={member.firstName}
          onChange={onMemberChange}
          variant="outlined"
        />
        <TextField
          inputProps={{ style: INPUT_STYLE }}
          autoComplete="off"
          size="medium"
          label="Last Name"
          name="lastName"
          value={member.lastName}
          onChange={onMemberChange}
          variant="outlined"
        />
        <TextField
          inputProps={{ style: INPUT_STYLE }}
          autoComplete="off"
          size="medium"
          label="Email"
          name="email"
          value={member.email}
          onChange={onMemberChange}
          variant="outlined"
        />
        <TextField
          inputProps={{ style: INPUT_STYLE }}
          autoComplete="off"
          size="medium"
          label="Team Name"
          name="teamName"
          value={member.teamName}
          onChange={onMemberChange}
          variant="outlined"
        />
        <TextField
          inputProps={{ style: INPUT_STYLE }}
          autoComplete="off"
          size="medium"
          label="Nick Name"
          name="nickName"
          value={member.nickName}
          onChange={onMemberChange}
          variant="outlined"
        />
        <Button style={BUTTON_STYLE} variant="outlined" color="default" size="large" onClick={onJoinLeague}>
          Join League
        </Button>
      </div>
    </div>
  );
};

export default JoinLeaguePage;
