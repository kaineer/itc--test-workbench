import { type ButtonProps } from "./ButtonProps"
import classes from './Buttons.module.css'
import { BaseButton } from "./BaseButton";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { codeSlice } from "@slices/code";

export const SendButton = ({ text = "Отправить", onClick = () => null }: ButtonProps) => {
  const { getCodeIsValid } = codeSlice.selectors;
  const valid = useSelector(getCodeIsValid);
  const className = clsx(classes.primary, {
    [classes.readonly]: !valid
  });

  return (
    <BaseButton
      className={ className }
      readonly={!valid}
      text={ text }
      onClick={onClick} />
  )
}
