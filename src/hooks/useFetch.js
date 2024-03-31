import { useState, useEffect } from "react";

export function useFetch(functionName) {
    const [data, setData] = useState(null);

    const fetchData = async () => {
        try {
            const data = await functionName();
            setData(data);
        }catch (error) {
            console.error('err');
            setData(null);
        }
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return data;
}
