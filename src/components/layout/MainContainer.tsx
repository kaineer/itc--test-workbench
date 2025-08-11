import type { ReactNode } from "react";
import classes from "./MainContainer.module.css"

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
