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
    getUnittestResults,
  } = unittestSlice.selectors;
  const cases = useSelector(getUnittestCases);
  const results = useSelector(getUnittestResults);
  const [ list, setList ] = useState<Task[]>([]);

  useEffect(() => {
    // TODO: дальше нужно реализовывать
    //   goalSlice и вместе с запуском раннера
    //   сохранять в него результаты выполнения
    setList(
      (cases || []).map((cs, i) => {
        return {
          title: cs.title,
          failed: !!results[i].failed,
          skipped: false,
          waiting: (typeof results[i].failed === "undefined"),
        }
      })
    );
  }, [cases, results]);

  return (
    <ul className={classes.list}>
      { list.map(renderTask) }
    </ul>
  );
}
