import { type ButtonProps } from "./ButtonProps"
import classes from './Buttons.module.css'
import { BaseButton } from "./BaseButton";

export const SendButton = ({ text = "Отправить", onClick = () => null }: ButtonProps) => {
  const className = classes.primary;
  return (
    <BaseButton
      className={ className }
      text={ text }
      onClick={onClick} />
  )
}
