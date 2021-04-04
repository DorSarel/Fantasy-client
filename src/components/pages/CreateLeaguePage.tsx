import React, { ChangeEvent, useState } from "react";
import trophy from "../../assets/images/trophy 1.png"
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CreateLeagueStep from "./CreateLeagueArea/CreateLeagueStep";

const CreateLeague = () => {


    function getSteps() {
        return ['Create League', 'Invite', 'My Team'];
    }


    function getStepContent(step: number) {
        switch (step) {
            case 0:
                return <CreateLeagueStep  />
            case 1:
                return <h1>Here...</h1>;
            case 2:
                return <h1>Here...</h1>;
            default:
                return <h1>Done!</h1>;
        }
    }
    const [activeStep, setActiveStep] = React.useState(0);
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
                    <div style={{ height: "13rem" }} className="create-league-title">
                        <img src={trophy} />
                        <h3>Create your NBA Fantasy League</h3>
                    </div>
                    <Stepper className="stepper" activeStep={activeStep}>
                        <Step >
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
                                <Typography>
                                    All steps completed - you&apos;re finished
            </Typography>
                                <Button size="large" onClick={handleReset}>
                                    Reset
            </Button>
                            </div>
                        ) : (
                            <div>
                                <Typography >{getStepContent(activeStep)}</Typography>
                                <div>
                                    <Button size="large" disabled={activeStep === 0} onClick={handleBack} >
                                        Back
                                     </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        size="large"
                                    >
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </>
        );
    }

export default CreateLeague;



{/* <RadioGroup aria-label="team" name="team" value={numOfTeams} onChange={handleSubmit}>
<Radio value="8" size="small" />
<Radio value="10"  size="small"/>
<Radio value="12"size="small" />
<Radio value="14"size="small" />
<FormControlLabel value="1" control={<Radio size="small"/>} label="Head to Head points"/>
<FormControlLabel value="2" control={<Radio size="small"/>} label="Head to Head category" />
<FormControlLabel value="3" control={<Radio size="small"/>} label="Roto" />
<FormControlLabel value="3" control={<Radio size="small"/>} label="Roto" />

</RadioGroup>
          </div>
              <h3>Scoring Type</h3>
          <div className="div3">
<RadioGroup aria-label="team" name="team" value={team} onChange={handleChange}>
<FormControlLabel value="1" control={<Radio size="small"/>} label="Head to Head points"/>
<FormControlLabel value="2" control={<Radio size="small"/>} label="Head to Head category" />
<FormControlLabel value="3" control={<Radio size="small"/>} label="Roto" />
</RadioGroup>
          </div> */}