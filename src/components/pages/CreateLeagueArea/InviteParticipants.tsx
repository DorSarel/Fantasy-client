import { TextField } from '@material-ui/core';
import React from 'react';
import { Participant } from '../../../models/League/LeagueModels';

interface Props {
  participants: Participant[];
  handleParticipantChange: (idx: number, e) => void;
}

const InviteParticipants: React.FC<Props> = ({ participants, handleParticipantChange }) => {
  return (
    <div className="league-invite">
      {participants.map((participant, idx) => {
        return (
          <div key={idx} className="league-invite-tile">
            <TextField
              autoComplete="off"
              size="medium"
              label="First Name"
              name="firstName"
              value={participant.firstName}
              onChange={(e) => handleParticipantChange(idx, e)}
              variant="outlined"
            />
            <TextField
              autoComplete="off"
              size="medium"
              label="Last Name"
              name="lastName"
              value={participant.lastName}
              onChange={(e) => handleParticipantChange(idx, e)}
              variant="outlined"
            />
            <TextField autoComplete="off" size="medium" label="Email" name="email" value={participant.email} onChange={(e) => handleParticipantChange(idx, e)} variant="outlined" />
          </div>
        );
      })}
    </div>
  );
};

export default InviteParticipants;
