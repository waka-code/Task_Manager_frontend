import { HomeIcon } from "../../assets/svg/HomeIcon";
import { TaskInfoBox } from "../common/taskInfoBox";

export function Home() {
  // const { fetchTasks } = useTask();

  return <div className="bg-slate-100 w-full p-12">
    <TaskInfoBox icons={<HomeIcon/>} status={"Tack Complete"} taskAmount={"10"} />
  </div>;
}
