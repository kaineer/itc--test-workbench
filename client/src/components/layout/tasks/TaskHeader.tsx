import classes from "./TaskHeader.module.css";
import { useSelector } from "react-redux";
import { unittestSlice } from "@slices/unittest";

export const TaskHeader = () => {
  const { getUnittestTitle } = unittestSlice.selectors;
  const testTitle = useSelector(getUnittestTitle);

  return (
    <h2 className={ classes.header }>{ testTitle }</h2>
  );
}
