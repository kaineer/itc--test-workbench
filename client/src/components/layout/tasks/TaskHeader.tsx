import { useSelector } from "react-redux";
import { unittestSlice } from "../../../store/slices/unittest";
import classes from "./TaskHeader.module.css";

export const TaskHeader = () => {
  const { getUnittestTitle } = unittestSlice.selectors;
  const testTitle = useSelector(getUnittestTitle);

  return (
    <h2 className={ classes.header }>{ testTitle }</h2>
  );
}
