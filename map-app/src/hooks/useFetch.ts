import { useState, useEffect } from "react";

interface Result {
  data: any;
  error: any;
  isLoading: boolean;
}

const useFetch = (url: string): Result => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      await fetch(url)
        .then((res) => res.json())
        .then((result) => setData(result))
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, error, isLoading };
};

export default useFetch;
