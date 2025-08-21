import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { blankUnittest, type Unittest } from "../../checks/unittest/unittest";

interface SliceContent {
  unittest: Unittest;
}

const initialState: SliceContent = {
  unittest: blankUnittest
}

export const unittestSlice = createSlice({
  name: 'unittest',
  initialState,
  reducers: {
    setUnittest: (state: SliceContent, action: PayloadAction<Unittest>) => {
      state.unittest = action.payload;
    },
  },
  selectors: {
    getUnittestId: (state) => state.unittest.id,
    getUnittestTitle: (state) => (
      state.unittest.title ||
      state.unittest.description.title
    ),
    getUnittestDescription: (state) => state.unittest.description.html,
    getUnittestTemplate: (state) => state.unittest.template,
    getUnittestCases: (state) => state.unittest.cases,
    getUnittestVars: (state) => state.unittest.resultVars,
  },
});
