import { useParams } from 'react-router';
import classes from './Description.module.css';
import { useGetTaskQuery } from '../../../../store/api/task';
import { MarkdownWithCode } from '../../../render/MarkdownWithCode';
import { StartButton } from '../../../buttons/StartButton';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { unittestSlice } from '../../../../store/slices/unittest';

export const Description = () => {
  const { taskId } = useParams();
  const { data: task, isLoading } = useGetTaskQuery(taskId);
  const { markdown = "" } = task || {};
  const { setUnittest } = unittestSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    if (task && !isLoading) {
      const { resultVars, cases, uuid, template, title } = task;
      dispatch(setUnittest({ resultVars, cases, template, id: taskId, title }));
    }
  }, [task, isLoading]);

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
