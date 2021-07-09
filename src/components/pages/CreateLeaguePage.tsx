import React, { useState } from 'react';
import trophy from '../../assets/images/trophy 1.png';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CreateLeagueStep from './CreateLeagueArea/CreateLeagueStep';
import InviteParticipants from './CreateLeagueArea/InviteParticipants';
import LeagueCreatorStep from './CreateLeagueArea/LeagueCreatorStep';
import { ICreateLeagueRequest, LeagueCreator, Participant } from '../../models/League/LeagueModels';
import { useCreateLeague } from '../../hooks/useCreateLeague';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';

const CreateLeague = () => {
  const [leagueName, setLeagueName] = useState('');
  const [numOfTeams, setNumOfTeams] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [leagueCreator, setLeagueCreator] = useState<LeagueCreator>({
    firstName: '',
    lastName: '',
    email: '',
    teamName: '',
    nickName: '',
    googleTokenId: '',
  });
  const { createLeague } = useCreateLeague();
  const user = useSelector((store: RootState) => store.user.user);

  const onLeagueNameChange = (event: any) => {
    setLeagueName(event.target.value);
  };

  const onNumberOfTeamsChange = (event: any) => {
    const valueAsNum = parseInt(event.target.value);
    if (valueAsNum < 1 || isNaN(valueAsNum)) return;

    setNumOfTeams(valueAsNum);

    const data: Participant[] = [];
    for (let idx = 0; idx < valueAsNum - 1; ++idx) {
      data.push({
        firstName: '',
        lastName: '',
        email: '',
      });
    }
    setParticipants(data);
  };

  const onParticipantChange = (idx: number, e) => {
    const { name, value } = e.target;

    setParticipants((prev) =>
      prev.map((participant, i) => {
        if (i === idx) {
          return {
            ...participant,
            [name]: value,
          };
        }

        return participant;
      })
    );
  };

  const onCreatorChange = (e) => {
    const { name, value } = e.target;

    setLeagueCreator((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function getSteps() {
    return ['Create League', 'Invite', 'My Team'];
  }

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return <CreateLeagueStep leagueName={leagueName} numOfTeams={numOfTeams} handleNameChange={onLeagueNameChange} handleNumOfTeamChange={onNumberOfTeamsChange} />;
      case 1:
        return <InviteParticipants participants={participants} handleParticipantChange={onParticipantChange} />;
      case 2:
        return <LeagueCreatorStep leagueCreator={leagueCreator} handleCreatorChange={onCreatorChange} />;
      default:
        return <h1>Done!</h1>;
    }
  }

  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleCreateLeague = () => {
    if (leagueName === '' || numOfTeams < 1) {
      alert('League Name / Number of teams in invalid. Please fix');
      return;
    }

    const isValidFirstNames = participants.filter((p) => p.firstName !== '').length === participants.length;
    const isValidLastNames = participants.filter((p) => p.lastName !== '').length === participants.length;
    const isValidEmails = participants.filter((p) => p.email !== '').length === participants.length;

    if (!isValidFirstNames || !isValidLastNames || !isValidEmails) {
      alert('Missing fields in invite step. Please fix');
      return;
    }

    if (leagueCreator.firstName === '' || leagueCreator.lastName === '' || leagueCreator.email === '' || leagueCreator.teamName === '' || leagueCreator.nickName === '') {
      alert('Missing fields in my team step. Please fix');
      return;
    }

    // send data to server
    const request: ICreateLeagueRequest = {
      leagueName,
      numberOfTeams: numOfTeams,
      participants,
      leagueCreator: {
        ...leagueCreator,
        googleTokenId: user.googleId,
      },
    };

    createLeague(request);
  };

  return (
    <>
      <div className="create-league middle-column">
        <div style={{ height: '13rem' }} className="create-league-title">
          <img src={trophy} alt="Trophy" />
          <h3>Create your NBA Fantasy League</h3>
        </div>
        <Stepper className="stepper" activeStep={activeStep}>
          <Step>
            <StepLabel>Create League</StepLabel>
          </Step>
          <Step>
            <StepLabel>Invite</StepLabel>
          </Step>
          <Step>
            <StepLabel>My Team</StepLabel>
          </Step>
        </Stepper>
        <div>
          <div>
            <Typography variant="body1" component="span">
              {getStepContent(activeStep)}
            </Typography>
            <div>
              {activeStep === steps.length - 1 ? (
                <Button variant="contained" color="primary" onClick={handleCreateLeague} size="large">
                  Create League
                </Button>
              ) : (
                <Button variant="contained" color="primary" onClick={handleNext} size="large">
                  Next
                </Button>
              )}
              <Button size="large" disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreateLeague;
