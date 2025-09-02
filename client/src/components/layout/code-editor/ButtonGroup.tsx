import classes from "./ButtonGroup.module.css";
import { useDispatch, useSelector } from 'react-redux'
import { SendButton } from "./SendButton";
import { ResetButton } from "./ResetButton";

import { codeSlice } from "@slices/code";
import { unittestSlice } from "@slices/unittest";

export const ButtonGroup = () => {
  const { getCodeIsValid, getCode } = codeSlice.selectors;
  const codeIsValid = useSelector(getCodeIsValid);
  const code = useSelector(getCode);
  const dispatch = useDispatch();
  const { runUnittest } = unittestSlice.actions;

  const onSend = () => {
    dispatch(runUnittest(code));
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
