import classes from "./TextArea.module.css"

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";

import { javascript } from "@codemirror/lang-javascript";
import CodeMirror from "@uiw/react-codemirror";

import { codeSlice } from "@slices/code";
import { unittestSlice } from "@slices/unittest";

export const TextArea = () => {
  const dispatch = useDispatch();
  const { getCode, getUnittestId: getCodeUnittestId } = codeSlice.selectors;
  const { setCode, setUnittestId } = codeSlice.actions;
  const { getUnittestTemplate, getUnittestId } =
    unittestSlice.selectors;
  const code = useSelector(getCode);
  const ref = useRef(null);
  const template = useSelector(getUnittestTemplate);
  const id = useSelector(getUnittestId);
  const codeId = useSelector(getCodeUnittestId);

  const onCodeChange = (value: string) => {
    dispatch(setCode(value));
    dispatch(setUnittestId(id));
  }

  useEffect(() => {
    if (codeId !== id) {
      dispatch(setCode(template));
    }
  }, [id, codeId]);

  return (
    <CodeMirror
      ref={ref}
      className={ classes.textarea }
      value={ code }
      extensions={[ javascript() ]}
      onChange={ onCodeChange }
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
