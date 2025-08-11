import { useSelector } from "react-redux";
import { codeSlice } from "../../store/slices/code";
import classes from "./TextArea.module.css"

export const TextArea = () => {
  const { getCode } = codeSlice.selectors;
  const code = useSelector(getCode);

  return (
    <textarea
      className={classes.textarea}
      defaultValue={code}
    />
  )
}
