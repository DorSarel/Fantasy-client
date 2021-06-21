import React from 'react';
import { Participant } from '../CreateLeaguePage';

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
            <div className="tile-form">
              <label>First Name:</label>
              <input type="text" name="firstName" value={participant.firstName} onChange={(e) => handleParticipantChange(idx, e)} />
            </div>
            <div className="tile-form">
              <label>Last Name:</label>
              <input type="text" name="lastName" value={participant.lastName} onChange={(e) => handleParticipantChange(idx, e)} />
            </div>
            <div className="tile-form">
              <label>Email:</label>
              <input type="email" name="email" value={participant.email} onChange={(e) => handleParticipantChange(idx, e)} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InviteParticipants;
