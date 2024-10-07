import { useState } from "react";

export default function useRequest({ url, method }) {
  const [loading, setLoading] = useState(false);
  const requestFunction = async (body, custom) => {
    setLoading(true);
    try {
      const res = await fetch(url || custom, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
        body: !!body && method !== "GET" ? JSON.stringify(body) : undefined,
      });
      if (!res.ok) throw new Error("Failed to fetch information");
      const data = await res.json();
      setLoading(false);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };
  return { requestFunction, loading };
}
