import clsx from 'clsx';
import classes from './TaskItem.module.css';
import { MarkdownWithoutCode } from '@components/render/MarkdownWithCode';

interface Props {
  level?: number;
  title: string;
  failed?: boolean;
  skipped?: boolean;
  waiting?: boolean;
}

const levels = [
  classes.level1,
  classes.level2,
  classes.level3,
];

const levelClass = (level: number): string => {
  return levels[level - 1];
}

export const TaskItem = ({ level = 1, title, failed = false, waiting = true, skipped = false }: Props) => {
  const className = classes.item;
  const labelClassName = clsx(classes.label, {
    [classes.waiting]: waiting,
    [classes.failed]: !waiting && (failed && !skipped),
    [classes.complete]: !waiting && !failed && !skipped,
    [classes.skipped]: skipped,
  });

  return (
    <li className={ clsx(className, levelClass(level)) }>
      <label className={ labelClassName }>
        <MarkdownWithoutCode markdown={title} />
      </label>
    </li>
  )
}
