import React, { useState } from 'react';
import trophy from '../../assets/images/trophy 1.png';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CreateLeagueStep from './CreateLeagueArea/CreateLeagueStep';
import InviteParticipants from './CreateLeagueArea/InviteParticipants';

export interface Participant {
  firstName: string;
  lastName: string;
  email: string;
}

const CreateLeague = () => {
  const [leagueName, setLeagueName] = useState('');
  const [numOfTeams, setNumOfTeams] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [isStepValid, setIsStepValid] = useState(false);

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
        return <h1>Here...</h1>;
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

  const handleReset = () => {
    setActiveStep(0);
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
            <StepLabel>invite</StepLabel>
          </Step>
          <Step>
            <StepLabel>my Team</StepLabel>
          </Step>
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography variant="body1" component="h3">
                Greate Job!
              </Typography>
              <Button size="large" onClick={handleReset}>
                Reset
              </Button>
            </div>
          ) : (
            <div>
              <Typography variant="body1" component="span">
                {getStepContent(activeStep)}
              </Typography>
              <div>
                <Button variant="contained" color="primary" onClick={handleNext} size="large">
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
                <Button size="large" disabled={activeStep === 0} onClick={handleBack}>
                  Back
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default CreateLeague;
