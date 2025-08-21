import classes from "./Buttons.module.css"
import { type ButtonProps } from "./ButtonProps"
import { BaseButton } from "./BaseButton";

import { codeSlice } from "../../store/slices/code";
import { unittestSlice } from "../../store/slices/unittest";
import { useDispatch, useSelector } from "react-redux";

export const ResetButton = ({ text = "Сбросить" }: ButtonProps) => {
  const dispatch = useDispatch();
  const { setCode } = codeSlice.actions;
  const className = classes.danger;

  const { getUnittestTemplate } = unittestSlice.selectors;
  const template = useSelector(getUnittestTemplate);

  return (
    <BaseButton
      className={ className }
      text={ text }
      onClick={() => dispatch(setCode(template))}
    />
  );
}
