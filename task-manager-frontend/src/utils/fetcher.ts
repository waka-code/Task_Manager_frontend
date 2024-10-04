import { useCallback, useEffect, useState } from "react";
import { Task } from "../types/types";

type FetcherProps = {
  data: { tasks: Task[] } | undefined,
  loading: boolean,
  error: Error | null | unknown
}

export function useFetcher(onFetch: () => Promise<any>) {
  const [props, setProps] = useState<FetcherProps | undefined>({
    data: undefined,
    loading: true,
    error: null,
  });

  const fetchData = useCallback(async () => {
    try {
      const result = await onFetch();
      const data = result;
      setProps({ data, loading: false, error: null });
    } catch (error) {
      setProps({ data: undefined, loading: false, error });
      console.error("Error:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [onFetch]);

  return { state: props };
}
