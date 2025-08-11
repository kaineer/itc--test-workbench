import classes from "./Buttons.module.css"
import { type ButtonProps } from "./ButtonProps"
import clsx from "clsx";

interface BaseButtonProps extends ButtonProps {
  className: string;
}

const noop = () => null;

export const BaseButton = ({ className, text, onClick = noop }: BaseButtonProps) => {
  const buttonClassName = clsx(classes.button, className);
  return (
    <div className={buttonClassName} onClick={onClick}>
      { text }
    </div>
  )
};
