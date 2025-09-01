import { useSelector } from "react-redux";
import { TaskHeader } from "./tasks/TaskHeader";
import { TaskList } from "./tasks/TaskList";
import { unittestSlice } from "@slices/unittest";

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
