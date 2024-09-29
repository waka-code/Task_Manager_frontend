import { useCallback, useEffect, useState } from "react";

type FetcherProps = {
    data: [] | undefined,
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
        setProps({ data: result, loading: false, error: null });
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
