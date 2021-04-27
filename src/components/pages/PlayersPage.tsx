import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import SelectInput from '../common/SelectInput';
import PlayersPositionsFilter from '../PlayersPage/PlayersPositionsFilter';
import * as PlayerActions from '../../redux/playerSlice';
import { IPlayer } from '../../models/Player/PlayerModels';
import PlayersTable from '../common/PlayersTable';

// Mock Data
import players from '../../mocks/freePlayers.json';
import { useFetchPlayers } from '../../hooks/useFetchPlayers';

const headers = [
  {
    key: 'Player',
  },
  {
    key: 'Avg',
  },
  {
    key: 'Weekly Games',
  },
  {
    key: 'Stats',
    subHeaders: [
      {
        key: 'PPG',
      },
      {
        key: 'RPG',
      },
      {
        key: 'FGP',
      },
      {
        key: 'FGS',
      },
      {
        key: 'FGA',
      },
      {
        key: 'FGT',
      },
    ],
  },
  {
    key: 'Total',
  },
];

const PlayersPage = () => {
  const [positionsFilters, setPositionsFilters] = useState<string[]>([]);
  const [filteredPlayers, setFilteredPlayers] = useState<IPlayer[]>([]);
  const [playersInWatch, setPlayersInWatch] = useState<IPlayer[]>([]); // TODO: should be saved in backend
  const [teamName, setTeamName] = useState('');
  const [weeklyGames, setWeeklyGames] = useState(0);

  const { data, isLoading } = useFetchPlayers();
  const players = data?.slice(0, 20) ?? [];

  useEffect(() => {
    if (!isLoading) {
      setFilteredPlayers(players);
    }
  }, [isLoading]);

  const memoTeams = useMemo(() => {
    if (!players) return [];
    const teamsSet = players.reduce<Set<string>>((acc, player) => {
      return acc.add(player.teamName);
    }, new Set<string>());

    return Array.from(teamsSet);
  }, [players]);

  const memoWeeklyGames = useMemo(() => {
    if (!players) return [];
    Array.from(
      players.reduce<Set<number>>((acc, player) => {
        return acc.add(player.weeklyGames);
      }, new Set<number>())
    );
  }, [players]);

  useEffect(() => {
    filterPlayers();
  }, [positionsFilters, teamName, weeklyGames]);

  const filterPlayers = () => {
    let newFilteredArray: IPlayer[] = JSON.parse(JSON.stringify(players));

    if (positionsFilters.length > 0) {
      newFilteredArray = newFilteredArray.filter((player) => positionsFilters.includes(player.leagues.standard.pos));
    }

    if (teamName !== '') {
      newFilteredArray = newFilteredArray.filter((player) => player.teamName === teamName);
    }

    if (weeklyGames > 0) {
      newFilteredArray = newFilteredArray.filter((player) => player.weeklyGames === weeklyGames);
    }

    setFilteredPlayers(newFilteredArray);
  };

  const handlePositionCheck = ({ checked, values }: { checked: boolean; values: string[] }) => {
    if (checked) setPositionsFilters((currentFilters) => [...currentFilters, ...values]);
    else {
      setPositionsFilters((currentFilters) => currentFilters.filter((filter) => !values.includes(filter)));
    }
  };

  return (
    <>
      <div className="players-filters middle-column">
        <div className="players-filters-title">
          <h1>Players Board</h1>
          <span>Dor's league</span>
        </div>
        <PlayersPositionsFilter onChange={handlePositionCheck} selectedPositions={positionsFilters} />
        <div className="players-filters-select">
          <SelectInput label="Teams" items={memoTeams} onChange={(e) => setTeamName((e.target as HTMLInputElement).value)} />
          <SelectInput label="Weekly Games" items={memoWeeklyGames} onChange={(e) => setWeeklyGames(parseInt((e.target as HTMLInputElement).value))} />
          <SelectInput label="Available" />
          <SelectInput label="Healthy" />
        </div>
      </div>
      <div className="players-main middle-column">
        <PlayersTable headers={headers} players={filteredPlayers} />
      </div>
    </>
  );
};

export default PlayersPage;
