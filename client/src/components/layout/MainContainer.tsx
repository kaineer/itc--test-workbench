import classes from "./MainContainer.module.css"
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const MainContainer = ({ children }: Props) => {
  return (
    <div className={ classes.container }>
      { children }
    </div>
  );
}
