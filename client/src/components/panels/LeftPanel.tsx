import type { ReactNode } from "react";
import classes from "./LeftPanel.module.css";

interface Props {
  children: ReactNode;
}

export const LeftPanel = ({ children }: Props) => {
  return (
    <div className={classes.panel}>
      { children }
    </div>
  );
}
