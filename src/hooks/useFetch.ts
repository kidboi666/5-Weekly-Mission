// useFetch.ts
import { useState, useEffect } from "react";

export function useFetch(url: string) {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (response.ok) {
                    const data = await response.json();
                    setData(data);
                } else {
                    setData(null);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setData(null);
            }
        };

        fetchData();
    }, [url]);

    return data;
}
