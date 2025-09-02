import classes from "./ButtonGroup.module.css";
import { useDispatch, useSelector } from 'react-redux'
import { codeSlice } from "../../store/slices/code";
import { SendButton } from "../buttons/SendButton";
import { ResetButton } from "../buttons/ResetButton";
import { unittestSlice } from "../../store/slices/unittest";

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
