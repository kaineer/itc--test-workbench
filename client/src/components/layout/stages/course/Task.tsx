import classes from './Task.module.css';
import type { TaskData } from "../../../../entities/types";
import { Link } from 'react-router';

interface Props {
  task: TaskData;
}

export const Task = ({ task }: Props) => {
  return (
    <div className={classes.task}>
      <Link to={ task.route } className={classes.link}>
        <b>{ task.id }</b>&nbsp;{ task.title }
      </Link>
    </div>
  );
}
