import React, { useEffect, useState } from 'react';
import Medal from "../../assets/images/medal.png"
import hoopers from "../../assets/images/hoopers.png"
import MediaBox from '../common/MediaBox';
import ListViewComponent from '../common/ListView';
import CardsSlider from '../common/Slider';
import PlayersTable from '../common/PlayersTable';
import { IPlayer } from '../../models/Player/PlayerModels';



const MyTeam = () => {
    const headers = React.useMemo(
        () => [
            {
                key: 'Player',
            },
            {
                key: 'Weekly Games',
            },
            {
                key: 'Total',
            },
            {
                key: 'Avg',
            },
        ],
        []
    );

    const players: IPlayer[] = [
        {
            firstName: 'Dor',
            lastName: 'Sarel',
            playerId: 1,
            teamName: 'Wizards',
            weeklyGames: 3,
            teamId: 23,
            heightInMeters: 1.72,
            leagues: {
                standard: {
                    active: 'true',
                    pos: 'SG',
                    jersey: 6,
                },
            },
        },
        {
            firstName: 'Dor',
            lastName: 'Sarel',
            playerId: 2,
            teamName: 'Los Angels Lakers',
            weeklyGames: 3,
            teamId: 23,
            heightInMeters: 1.72,
            leagues: {
                standard: {
                    active: 'true',
                    pos: 'PF',
                    jersey: 12,
                },
            },
        },
        {
            firstName: 'Dor',
            lastName: 'Sarel',
            playerId: 3,
            teamName: 'Los Angels Lakers',
            weeklyGames: 3,
            teamId: 23,
            heightInMeters: 1.72,
            leagues: {
                standard: {
                    active: 'true',
                    pos: 'SF',
                    jersey: 12,
                },
            },
        },
        {
            firstName: 'Dor',
            lastName: 'Sarel',
            playerId: 4,
            teamName: 'Portland',
            weeklyGames: 5,
            teamId: 23,
            heightInMeters: 1.72,
            leagues: {
                standard: {
                    active: 'true',
                    pos: 'C',
                    jersey: 9,
                },
            },
        },
    ];

    const [positionsFilters, setPositionsFilters] = useState<string[]>([]);
    const [filteredPlayers, setFilteredPlayers] = useState<IPlayer[]>(players);
    const [teamName, setTeamName] = useState('');


    useEffect(() => {
        filterPlayers();
    }, [positionsFilters, teamName]);

    const filterPlayers = () => {
        let newFilteredArray: IPlayer[] = JSON.parse(JSON.stringify(players));

        if (positionsFilters.length > 0) {
            newFilteredArray = newFilteredArray.filter((player) => positionsFilters.includes(player.leagues.standard.pos));
        }

        if (teamName !== '') {
            newFilteredArray = newFilteredArray.filter((player) => player.teamName === teamName);
        }

        setFilteredPlayers(newFilteredArray);
    };
    return (
        <>
            <div className="left-column articles">
                <h2>Articles: </h2>
                <MediaBox />
                <MediaBox />
                <div className="bottom-boxes">
                    <ListViewComponent header="Hottest Free Agents: " />
                    <ListViewComponent header="Trending Free Agents: " />
                </div>
            </div>
            <div className="middle-column main-div">
                <img className="hoopers" src={hoopers} />
                <div className="main-div-text">
                    <p>Team Hoopers</p>
                    <p>Israeli team</p>
                    <p>League name 20/21</p>
                    <div className="left-text">
                        <img src={Medal} />
                        <p>2nd</p>
                        <span>7-3-0</span>
                    </div>
                </div>
                <div className="slider-main">
                    <CardsSlider />
                </div>
                <div className="table">
                    <PlayersTable players={filteredPlayers} />
                </div>
            </div>

            <div className="right-column weekly-recap">
                <span>Weekly recap: </span>
                <p className="border"></p>
                <div className="twitter-box">
                    <MediaBox />
                </div>
            </div>
        </>
    );
};
export default MyTeam;
