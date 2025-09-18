import { useNavigate } from "react-router";
import { type ButtonProps } from "./ButtonProps"
import classes from './Buttons.module.css'
import { useSelector } from "react-redux";
import { stageSlice } from "@slices/stage";
import { useGetTaskQuery } from "@api/task";
import { BaseButton } from "./BaseButton";
import { unittestSlice } from "@slices/unittest";
import { useCallback } from "react";

export const NextButton = ({ text = "Дальше" }: ButtonProps) =>  {
  const { getTask } = stageSlice.selectors;
  const taskId = useSelector(getTask);
  const { getUnittestSolved } = unittestSlice.selectors;
  const solved = useSelector(getUnittestSolved);

  const { data: task, isSuccess } = useGetTaskQuery(taskId);
  const { nextRoute } = task || {};

  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    if (nextRoute) {
      navigate(nextRoute);
    }
  }, [nextRoute]);

  if (!nextRoute || !isSuccess || !solved) return null;

  return (
    <BaseButton
      text={ text }
      className={classes.primary}
      onClick={handleClick}
    />
  );
}
