import classes from "./Buttons.module.css"
import { type ButtonProps } from "./ButtonProps"
import clsx from "clsx";
import { noop } from "../../utils/functions";

interface BaseButtonProps extends ButtonProps {
  className: string;
  readonly?: boolean;
}

export const BaseButton = ({ className, text, readonly = false, onClick = noop }: BaseButtonProps) => {
  const buttonClassName = clsx(classes.button, className);
  const handleClick = () => {
    if (!readonly) {
      onClick();
    }
  }

  return (
    <button className={buttonClassName} onClick={handleClick}>
      { text }
    </button>
  )
};
