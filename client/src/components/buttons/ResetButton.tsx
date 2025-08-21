import classes from "./Buttons.module.css"
import { type ButtonProps } from "./ButtonProps"
import { BaseButton } from "./BaseButton";
import { useDispatch } from "react-redux";
import { codeSlice } from "../../store/slices/code";

export const ResetButton = ({ text = "Сбросить" }: ButtonProps) => {
  const dispatch = useDispatch();
  const { resetCode } = codeSlice.actions;
  const className = classes.danger;

  return (
    <BaseButton
      className={ className }
      text={ text }
      onClick={() => dispatch(resetCode())}
    />
  );
}
