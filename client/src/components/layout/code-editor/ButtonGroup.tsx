import classes from "./ButtonGroup.module.css";
import { useSelector } from 'react-redux'
import { SendButton } from "./SendButton";
import { ResetButton } from "./ResetButton";
import { codeSlice } from "@slices/code";

export const ButtonGroup = () => {
  const { getCodeIsValid, getCode } = codeSlice.selectors;
  const codeIsValid = useSelector(getCodeIsValid);
  const code = useSelector(getCode);

  const onSend = () => {
    // dispatch(runChecks(code));
  }

  return (
    <div className={classes.group}>
      <SendButton
        text={ codeIsValid ? "Проверить" : "Исправить" }
        onClick={ onSend }
      />
      <ResetButton />
    </div>
  )
}
