import { join, dirname } from "path"
import { unittestSlice } from "../../store/slices/unittest";
import { useDispatch } from "react-redux";

import unittest from "./unittest.json"
import { useEffect } from "react";

export const UnittestLoader = () => {
  const { setUnittest } = unittestSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUnittest(unittest));
  }, []);

  return null;
}
