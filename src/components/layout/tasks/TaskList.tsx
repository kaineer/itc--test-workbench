import { TaskItem } from './TaskItem';
import classes from './TaskList.module.css'

interface Task {
  title: string;
  failed: boolean;
  skipped: boolean;
  waiting: boolean;
}

const list = [
  { title: "Successful task",
    failed: false, skipped: false, waiting: false },
  { title: "Failed task",
    failed: true, skipped: false, waiting: false },
  { title: "Skipped task",
    failed: true, skipped: true, waiting: false },
];

const renderTask = (task: Task) => {
  return <TaskItem
    { ...task }
  />
}

export const TaskList = () => {
  return (
    <ul className={classes.list}>
      { list.map(renderTask) }
    </ul>
  );
}
