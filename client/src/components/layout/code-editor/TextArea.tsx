import { useDispatch, useSelector } from "react-redux";
import classes from "./TextArea.module.css"
import { useEffect, useRef } from "react";

import { javascript } from "@codemirror/lang-javascript";
import CodeMirror from "@uiw/react-codemirror";
import { codeSlice } from "@slices/code";
import { unittestSlice } from "@slices/unittest";

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
    <CodeMirror
      ref={ref}
      className={ classes.textarea }
      value={ code }
      extensions={[ javascript() ]}
      basicSetup={{
        lineNumbers: false,
        foldGutter: false,
        dropCursor: false,
        allowMultipleSelections: false,
        indentOnInput: false,
      }}
    />
  )
}
