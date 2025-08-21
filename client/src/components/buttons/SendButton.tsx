import { type ButtonProps } from "./ButtonProps"
import classes from './Buttons.module.css'
import { BaseButton } from "./BaseButton";
import { useSelector } from "react-redux";
import { codeSlice } from "../../store/slices/code";
import clsx from "clsx";

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
