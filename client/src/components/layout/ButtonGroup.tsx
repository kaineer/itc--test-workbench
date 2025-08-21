import classes from "./ButtonGroup.module.css";
import { useSelector } from 'react-redux'
import { codeSlice } from "../../store/slices/code";
import { SendButton } from "../buttons/SendButton";
import { ResetButton } from "../buttons/ResetButton";

export const ButtonGroup = () => {
  const { getCodeIsValid } = codeSlice.selectors;
  const codeIsValid = useSelector(getCodeIsValid);

  return (
    <div className={classes.group}>
      <SendButton text={ codeIsValid ? "Проверить" : "Исправить" } />
      <ResetButton />
    </div>
  )
}
