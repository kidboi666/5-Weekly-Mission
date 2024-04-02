import { useState, useEffect, useCallback } from 'react';

export function useFetch(url) {
    const [data, setData] = useState(null);

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setData(data);
            } else {
                setData(null);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setData(null);
        }
    }, [url]);

    useEffect(() => {
        fetchData();
    }, [url, fetchData]);

    return data;
}