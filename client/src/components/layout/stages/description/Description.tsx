import classes from './Description.module.css';

import { useParams } from 'react-router';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useGetTaskQuery } from '@api/task';
import { unittestSlice } from '@slices/unittest';
import { StartButton } from '@layout/code-editor/StartButton';
import { MarkdownWithCode } from '@components/render/MarkdownWithCode';

export const Description = () => {
  const { taskId = '' } = useParams();
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
