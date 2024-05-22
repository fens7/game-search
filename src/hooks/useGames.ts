import React from 'react';
import apiClient from '../services/api-client';

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const useGames = () => {
    const [games, setGames] = React.useState<Game[]>([]);
    const [error, setError] = React.useState('');
    const [isLoading, setLoading] = React.useState(false);

    const controller = new AbortController();

    React.useEffect(() => {
        setLoading(true);
        apiClient
            .get<FetchGamesResponse>('/games', { signal: controller.signal })
            .then((res) => {
                setGames(res.data.results);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });

        return () => {
            controller.abort();
            setLoading(false);
        };
    }, []);

    return { games, error, isLoading };
};

export default useGames;
