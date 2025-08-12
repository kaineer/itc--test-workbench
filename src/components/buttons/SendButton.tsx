import { type ButtonProps } from "./ButtonProps"
import classes from './Buttons.module.css'
import { BaseButton } from "./BaseButton";
import { useSelector } from "react-redux";
import { codeSlice } from "../../store/slices/code";

export const SendButton = ({ text = "Отправить", onClick = () => null }: ButtonProps) => {
  const className = classes.primary;
  const { getCodeIsValid } = codeSlice.selectors;
  const valid = useSelector(getCodeIsValid);

  return (
    <BaseButton
      className={ className }
      readonly={!valid}
      text={ text }
      onClick={onClick} />
  )
}
