import classes from "./MainContainer.module.css"
import type { ReactNode } from "react";
import { Provider } from "react-redux";
import { setupStore } from "../../store";

interface Props {
  children: ReactNode;
}

export const MainContainer = ({ children }: Props) => {
  return (
    <Provider store={ setupStore() }>
      <div className={ classes.container }>
        { children }
      </div>
    </Provider>
  );
}
