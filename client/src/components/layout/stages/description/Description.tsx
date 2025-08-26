import { useParams } from 'react-router';
import classes from './Description.module.css';
import { useGetTaskQuery } from '../../../../store/api/task';

export const Description = () => {
  const { taskId } = useParams();
  const { data: task, isLoading } = useGetTaskQuery(taskId);
  const { title = "", html = "" } = task || {};

  return (
    <div className={classes.description}>
      <div className={classes.html} dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
