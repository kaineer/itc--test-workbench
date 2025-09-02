import { join, dirname } from "path"
import { useDispatch } from "react-redux";

import unittest from "./unittest.json"
import { useEffect } from "react";
import { unittestSlice } from "@slices/unittest";

export const UnittestLoader = () => {
  const { setUnittest } = unittestSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(setUnittest(unittest));
  }, []);

  return null;
}
