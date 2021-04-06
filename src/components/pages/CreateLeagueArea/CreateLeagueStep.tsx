import React, { useState } from 'react';
import { Radio, RadioGroup } from '@material-ui/core';

const CreateLeagueStep = () => {
    const [team, setTeam] = useState('team');
    const [numOfTeams, setNumOfTeams] = useState('numOfTeams');

    const handleChange = (event: any) => {
        setTeam(event.target.value);
    };

    const handleSubmit = (event: any) => {
        setNumOfTeams(event.target.value);
    };

    return (
        <>
            <div className="create-league-step middle-column">
                <div className="div1">
                    <span>League Name</span>
                    <br />
                    <input type="text" />
                </div>
                <div className="div2"  >
                    <h3>Number Of Teams</h3>
                    <RadioGroup aria-label="team" name="team" value={numOfTeams} onChange={handleSubmit}>
                        <Radio value="8" size="small" />
                        <label>8</label>
                        <Radio value="10" size="small" />
                        <label>10</label>
                        <Radio value="12" size="small" />
                        <label>12</label>
                        <Radio value="14" size="small" />
                        <label>14</label>
                    </RadioGroup>
                </div>
                <div className="div3">
                    <h3>Scoring Type</h3>
                    <RadioGroup aria-label="team" name="team" value={team} onChange={handleChange}>
                        <Radio value="1" size="small" />
                        <label>Head to Head points</label>
                        <Radio value="2" size="small" />
                        <label>Head to Head category</label>
                        <Radio value="3" size="small" />
                        <label>Roto</label>
                    </RadioGroup>
                </div>
            </div>
        </>
    );
};
export default CreateLeagueStep;
