import React from 'react';

interface Props {
    firstTeam?: string;
        secondTeam?: string;
        header?: string;
        firstScore?: number;
        secondScore?: number;
}

const MediaBox: React.FC<Props> = ({ firstTeam, secondTeam, header, firstScore, secondScore}) => {

    return (
        <div className="mediaBox">
            <p>{header}</p>
            <p>{firstTeam}</p>
            <p>{secondTeam}</p>
            <p>{firstScore}</p>
            <p>{secondScore}</p>
        </div>
    );
};

export default MediaBox;