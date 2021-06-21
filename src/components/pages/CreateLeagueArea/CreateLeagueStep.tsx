import React from 'react';
import { Radio, RadioGroup } from '@material-ui/core';

interface Props {
  leagueName: string;
  numOfTeams: number;
  handleNameChange: (e) => void;
  handleNumOfTeamChange: (e) => void;
}

const CreateLeagueStep: React.FC<Props> = ({ leagueName, numOfTeams, handleNameChange, handleNumOfTeamChange }) => {
  return (
    <>
      <div className="create-league-step middle-column">
        <div className="div1">
          <span>League Name</span>
          <br />
          <input type="text" name="league" value={leagueName} onChange={handleNameChange} />
        </div>
        <div className="div2">
          <h3>Number Of Teams</h3>
          <RadioGroup aria-label="team" name="team" value={numOfTeams} onChange={handleNumOfTeamChange}>
            <Radio value={8} size="small" />
            <label>8</label>
            <Radio value={10} size="small" />
            <label>10</label>
            <Radio value={12} size="small" />
            <label>12</label>
            <Radio value={14} size="small" />
            <label>14</label>
          </RadioGroup>
        </div>
      </div>
    </>
  );
};
export default CreateLeagueStep;
