import { useDispatch, useSelector } from "react-redux";
import { codeSlice } from "../../../store/slices/code";
import { useEffect } from "react";
import { parseWithAcorn } from "../../../utils/parseWithAcorn";

export const SyntaxChecker = () => {
  const { setValid } = codeSlice.actions;
  const { getCode } = codeSlice.selectors;
  const code = useSelector(getCode);
  const dispatch = useDispatch();

  useEffect(() => {
    let valid = true;
    try {
      parseWithAcorn(code);
    } catch (err) {
      valid = false;
    }

    dispatch(setValid(valid));
  }, [code]);

  return null;
}
