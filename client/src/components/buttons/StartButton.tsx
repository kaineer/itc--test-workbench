import classes from "./Buttons.module.css"
import { type ButtonProps } from "./ButtonProps"
import { BaseButton } from "./BaseButton";
import { stageSlice, stageTask } from "../../store/slices/stage";
import { useDispatch } from "react-redux";
import clsx from "clsx";

export const StartButton = ({ text = "Приступить к решению" }: ButtonProps) => {
  const dispatch = useDispatch();
  const className = clsx(classes.button, classes.primary);
  const { setStage } = stageSlice.actions;

  return (
    <BaseButton
      className={ className }
      text={ text }
      onClick={() => dispatch(setStage(stageTask))}
    />
  );

}
