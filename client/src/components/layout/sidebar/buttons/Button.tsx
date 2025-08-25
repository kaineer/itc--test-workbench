import clsx from 'clsx';
import classes from './Button.module.css'
import type { ReactNode } from "react";

interface Props {
  onClick: () => void;
  title: string;
  children?: ReactNode;
  active?: boolean;
}

export const Button = ({ onClick, title, children, active = false }: Props) => {
  const className = clsx(
    classes.button,
    {[classes.active]: active }
  );

  return (
    <button
      title={title}
      onClick={onClick}
      className={className}
    >
      { children }
    </button>
  )
}
