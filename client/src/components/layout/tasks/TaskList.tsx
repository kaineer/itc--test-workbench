import { useSelector } from 'react-redux';
import { TaskItem } from './TaskItem';
import classes from './TaskList.module.css'
import { useEffect, useState } from 'react';
import { unittestSlice } from '@slices/unittest';

interface Task {
  title: string;
  failed: boolean;
  skipped: boolean;
  waiting: boolean;
}

const renderTask = (task: Task, idx: number) => {
  return <TaskItem
    key={idx}
    { ...task }
  />
}

export const TaskList = () => {
  const {
    getUnittestCases,
  } = unittestSlice.selectors;
  const cases = useSelector(getUnittestCases);
  const [ list, setList ] = useState<Task[]>([]);

  useEffect(() => {
    // TODO: дальше нужно реализовывать
    //   goalSlice и вместе с запуском раннера
    //   сохранять в него результаты выполнения
    setList(
      (cases || []).map((cs) => {
        return {
          title: cs.title,
          failed: false,
          skipped: false,
          waiting: true,
        }
      })
    );
  }, [cases]);

  return (
    <ul className={classes.list}>
      { list.map(renderTask) }
    </ul>
  );
}
