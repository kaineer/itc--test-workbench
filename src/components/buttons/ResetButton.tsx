import classes from "./Buttons.module.css"
import { type ButtonProps } from "./ButtonProps"
import { BaseButton } from "./BaseButton";

export const ResetButton = ({ text = "Сбросить", onClick = () => null }: ButtonProps) => {
  const className = classes.danger;
  return (
    <BaseButton
      className={ className }
      text={ text }
      onClick={onClick} />
  );
}
