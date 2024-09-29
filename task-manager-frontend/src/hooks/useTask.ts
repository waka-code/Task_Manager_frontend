import { useMockbinServices } from "../api/mockbinServices";
import { useFetcher } from "../utils/fetcher";

export function useTask() {
  const { getMockbinTasks } = useMockbinServices();
  const fetchTasks = useFetcher(getMockbinTasks)
  return { fetchTasks };
}
