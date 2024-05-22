import React from 'react';
import apiClient from '../services/api-client';

interface FetchResponse<T> {
    count: number;
    results: T[];
}

function useData<T>(endpoint: string) {
    const [data, setData] = React.useState<T[]>([]);
    const [error, setError] = React.useState('');
    const [isLoading, setLoading] = React.useState(false);

    const controller = new AbortController();

    React.useEffect(() => {
        setLoading(true);
        apiClient
            .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
            .then((res) => {
                setData(res.data.results);
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

    return { data, error, isLoading };
}

export default useData;
