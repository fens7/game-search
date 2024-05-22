import React from 'react';
import apiClient from '../services/api-client';

interface Genre {
    id: number;
    name: string;
}

interface FetchGanresResponse {
    count: number;
    results: Genre[];
}

function useGenres() {
    const [genres, setGenres] = React.useState<Genre[]>([]);
    const [error, setError] = React.useState('');
    const [isLoading, setLoading] = React.useState(false);

    const controller = new AbortController();

    React.useEffect(() => {
        setLoading(true);
        apiClient
            .get<FetchGanresResponse>('/genres', { signal: controller.signal })
            .then((res) => {
                setGenres(res.data.results);
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

    return { genres, error, isLoading };
}

export default useGenres;
