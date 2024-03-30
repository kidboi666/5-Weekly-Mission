import { useState, useEffect } from 'react';
import fetchData from '../apis/GetApi.jsx';

function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData(url)
      .then((fetchedData) => setData(fetchedData))
      .catch((error) => console.error(error));
  }, [url]);

  return [data, setData];
}

export default useFetch;
