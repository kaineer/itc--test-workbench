import { useSelector } from "react-redux";
import { unittestSlice } from "../../store/slices/unittest";
import { TaskHeader } from "./tasks/TaskHeader";
import { TaskList } from "./tasks/TaskList";

export const Tasks = () => {
  const { getUnittestTitle } = unittestSlice.selectors;
  const taskTitle = useSelector(getUnittestTitle);

  return (
    <>
      <TaskHeader text={ taskTitle } />
      <TaskList />
    </>
  );
}
