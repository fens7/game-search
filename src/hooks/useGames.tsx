import React from 'react';
import apiClient from '../services/api-client';

export interface Game {
    id: number;
    name: string;
    background_image: string;
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const useGames = () => {
    const [games, setGames] = React.useState<Game[]>([]);
    const [error, setError] = React.useState('');

    const controller = new AbortController();

    React.useEffect(() => {
        apiClient
            .get<FetchGamesResponse>('/games', { signal: controller.signal })
            .then((res) => setGames(res.data.results))
            .catch((err) => setError(err.message));

        return () => {
            controller.abort();
        };
    }, []);

    return { games, error };
};

export default useGames;
