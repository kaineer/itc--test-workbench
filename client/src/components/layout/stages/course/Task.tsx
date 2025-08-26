import classes from './Task.module.css';
import type { TaskData } from "../../../../entities/types";

interface Props {
  task: TaskData;
}

export const Task = ({ task }: Props) => {
  return (
    <div className={classes.task}>
      <a href={ task.route } className={classes.link}>
        <b>{ task.id }</b>&nbsp;{ task.title }
      </a>
    </div>
  );
}
