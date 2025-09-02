import classes from "./Buttons.module.css"
import { type ButtonProps } from "./ButtonProps"
import { BaseButton } from "./BaseButton";

import { useDispatch, useSelector } from "react-redux";
import { codeSlice } from "@slices/code";
import { unittestSlice } from "@slices/unittest";

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
