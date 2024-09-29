import { useCallback } from "react";
import { TASK_API_URL } from "./mockbinApi";

export const useMockbinServices = () => {
  const getMockbinTasks = useCallback(async () => {
    try {
      const response = await fetch(`${TASK_API_URL}/tasks`).then((res) =>
        res.json()
      );
      return response;
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  }, []);

  return { getMockbinTasks };
};
