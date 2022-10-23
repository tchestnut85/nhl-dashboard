import { useEffect, useState } from 'react';

export function useRequest(requestFn) {
  const [data, setData] = useState([]);
  console.log('data:', data);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await requestFn();
      setData(data.data);
      ``;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { data, error, loading };
}
