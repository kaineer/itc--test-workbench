import { useParams } from 'react-router';
import classes from './Description.module.css';
import { useGetTaskQuery } from '../../../../store/api/task';
import { MarkdownWithCode } from '../../../render/MarkdownWithCode';

export const Description = () => {
  const { taskId } = useParams();
  const { data: task, isLoading } = useGetTaskQuery(taskId);
  const { title = "", html = "", markdown = "" } = task || {};

  return (
    <div className={classes.description}>
      <MarkdownWithCode markdown={ markdown } />
    </div>
  );
}
