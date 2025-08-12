import { TaskHeader } from "./tasks/TaskHeader";
import { TaskList } from "./tasks/TaskList";

export const Tasks = () => {
  const taskTitle = "task title";

  return (
    <>
      <TaskHeader text={ taskTitle } />
      <TaskList />
    </>
  );
}
