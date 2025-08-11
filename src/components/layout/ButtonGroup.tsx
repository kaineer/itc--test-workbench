import classes from "./ButtonGroup.module.css";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const ButtonGroup = ({ children }: Props) => {
  return (
    <div className={classes.group}>
      { children }
    </div>
  )
}
