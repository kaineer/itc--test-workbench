import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { codeSlice } from "@slices/code";
import { parseWithAcorn } from "@utils/parseWithAcorn";

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
      console.log(err);
      valid = false;
    }

    dispatch(setValid(valid));
  }, [code, dispatch, setValid]);

  return null;
}
