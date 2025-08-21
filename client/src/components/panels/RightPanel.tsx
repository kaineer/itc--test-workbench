import type { ReactNode } from "react";
import classes from "./RightPanel.module.css";

interface Props {
  children: ReactNode;
}

export const RightPanel = ({ children }: Props) => {
  return (
    <div className={classes.panel}>
      { children }
    </div>
  );
}
