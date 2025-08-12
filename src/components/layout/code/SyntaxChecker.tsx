import { useDispatch, useSelector } from "react-redux";
import { codeSlice } from "../../../store/slices/code";
import { parse } from "acorn";
import { useEffect } from "react";

export const SyntaxChecker = () => {
  const { setValid } = codeSlice.actions;
  const { getCode } = codeSlice.selectors;
  const code = useSelector(getCode);
  const dispatch = useDispatch();

  useEffect(() => {
    let valid = true;
    try {
      parse(code);
    } catch (err) {
      valid = false;
    }

    dispatch(setValid(valid));
  }, [code]);

  return null;
}
