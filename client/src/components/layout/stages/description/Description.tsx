import { useParams } from 'react-router';
import classes from './Description.module.css';
import { useGetTaskQuery } from '../../../../store/api/task';
import { MarkdownWithCode } from '../../../render/MarkdownWithCode';
import { StartButton } from '../../code-editor/StartButton';

export const Description = () => {
  const { taskId } = useParams();
  const { data: task, isLoading } = useGetTaskQuery(taskId);
  const { markdown = "" } = task || {};

  if (isLoading) return null;

  return (
    <div className={classes.description}>
      <div className={classes.content}>
        <MarkdownWithCode markdown={ markdown } />
      </div>
      <div className={classes.buttons}>
        <StartButton />
      </div>
    </div>
  );
}
