import { useCallback, useMemo } from "react";
import { HomeIcon } from "../../assets/svg/HomeIcon";
import { TaskInfoBox } from "../common/taskInfoBox";
import { useTask } from "../../hooks/useTask";

export function Home() {
  const { fetchTasks } = useTask();

  const taskAmount = useCallback((state: string) => {
    let taskCompleted = 0;
    let not_assigned = 0;
    let pending = 0;

    switch (state) {
      case "completed":
        taskCompleted++;
        return taskCompleted;
      case "pending":
        pending++;
        return pending;
      case "not_assigned":
        not_assigned++;
        return not_assigned;
      default: undefined;
    }
  }, [])

  const icons = useCallback((state: string) => {
    switch (state) {
      case "completed":
        return <HomeIcon />
      case "pending":
        return <HomeIcon />
      case "not_assigned":
        return <HomeIcon />
      default: undefined;
    }
  }, [])

  const status = useMemo(() => {
    const tasks = fetchTasks.state?.data?.tasks

    if (!tasks) return undefined;

    return tasks.map((tasks)=>{
      return {
        icons: icons(tasks.status),
        status: tasks.status,
        taskAmount: taskAmount(tasks.status),
      };
    })
  }, [fetchTasks]);

  console.log("Status object:", status);

  return <div className="bg-slate-100 w-full p-12">
    <TaskInfoBox status={status} />
  </div>;
}
