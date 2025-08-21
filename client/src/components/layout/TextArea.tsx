import { useDispatch, useSelector } from "react-redux";
import { codeSlice } from "../../store/slices/code";
import classes from "./TextArea.module.css"
import { useEffect, useRef } from "react";
import { unittestSlice } from "../../store/slices/unittest";

export const TextArea = () => {
  const dispatch = useDispatch();
  const { getCode } = codeSlice.selectors;
  const { setCode } = codeSlice.actions;
  const { getUnittestTemplate, getUnittestId } =
    unittestSlice.selectors;
  const code = useSelector(getCode);
  const ref = useRef(null);
  const id = useSelector(getUnittestId);
  const template = useSelector(getUnittestTemplate);

  const handleChange = () => {
    if (ref.current) {
      dispatch(setCode(ref.current.value));
    }
  }

  useEffect(() => {
    dispatch(setCode(template));
  }, [id]);

  useEffect(() => {
    ref.current && (ref.current.value = code);
  }, [code]);

  return (
    <textarea
      ref={ref}
      onInput={handleChange}
      className={classes.textarea}
      defaultValue={code}
    />
  )
}
