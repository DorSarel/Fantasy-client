import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Radio, RadioGroup } from '@material-ui/core';



    const CreateLeagueStep = () => {
    const [team, setTeam] = React.useState('team');
    const [numOfTeams, setNumOfTeams] = React.useState('numOfTeams');

    const handleChange = (event:any) => {
      setTeam(event.target.value);
    };

      const handleSubmit = (event:any) => {
        setNumOfTeams(event.target.value);

      };

    // const handleTeamClick = (e: React.SyntheticEvent) => {
    //     const { value, checked } = e.target as HTMLInputElement;
    //     let values = [value];

    //     if (value === "8") {
    //         return;
    //     } if (value === '10') {
    //         return;
    //     } if (value === '12') {
    //         return;
    //     } if (value === '14') {
    //         return;
    //     }

    //     onChange({ checked, values });
    // };


    return (
        <>
            <div className="create-league-step middle-column">
                <div className="div1">
                    <span>League Name</span>
                    <br /><br />
                    <input type="text" />
                </div>
                <div className="div2"  >
                    <h3>Number Of Teams</h3>
                    <br />
                    {/* <FormControlLabel
                        control={<Checkbox
                            color="primary"
                            name="team"
                            value="8"

                        />}
                        label="8"
                    />
                    <FormControlLabel
                        control={<Checkbox
                            color="primary"
                            name="team"
                            value="10"
                        />}
                        label="10"
                    />
                    <FormControlLabel
                        control={<Checkbox
                            color="primary"
                            name="team"
                            value="12"

                        />}
                        label="12"
                    />
                    <FormControlLabel
                        control={<Checkbox
                            color="primary"
                            name="team"
                            value="14"
                        />}
                        label="14"
                    /> */}
        <RadioGroup aria-label="team" name="team" value={numOfTeams} onChange={handleSubmit}>
      <Radio value="8" size="small" />
      <label>8</label>
    <Radio value="10"  size="small"/>
    <label>10</label>
      <Radio value="12"size="small" />
      <label>12</label>
      <Radio value="14"size="small" />
      <label>14</label>
      </RadioGroup>
                </div>
                    <h3>Scoring Type</h3>
                <div className="div3">
      <RadioGroup aria-label="team" name="team" value={team} onChange={handleChange}>
      <Radio value="1" size="small" />
          <label>Head to Head points</label>
    <Radio value="2"  size="small"/>
      <label>Head to Head category</label>
      <Radio value="3"size="small" />
    <label>Roto</label>
      </RadioGroup>
                </div>
            </div>
        </>
    );
};
export default CreateLeagueStep;
