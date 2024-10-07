import { useEffect, useState } from "react";

const useFetch = ({ url, method }) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    })
      .then((res) => {
        if (!res.ok)
          throw new Error("Something went wrong while fetching data");
        return res.json();
      })
      .then((data) => setResponse(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));

    return () => {
      setResponse(null), setError(null), setLoading(false);
    };
  }, [url, method]);
  return { response, error, loading };
};
export default useFetch;
