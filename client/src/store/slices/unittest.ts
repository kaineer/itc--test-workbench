import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UnittestData } from "../../entities/types";
import { runUnittest } from "../../checks/runners/unittestRunner";

const blankUnittest: UnittestData = {
  id: "",
  title: "",
  resultVars: [],
  cases: [],
  template: ''
}

interface UnittestResult {
  ok?: boolean;
  failed?: boolean;
}

interface SliceContent {
  unittest: UnittestData;
  results: UnittestResult[],
}

const initialState: SliceContent = {
  unittest: blankUnittest,
  results: [],
}

export const unittestSlice = createSlice({
  name: 'unittest',
  initialState,
  reducers: {
    setUnittest: (state: SliceContent, action: PayloadAction<UnittestData>) => {
      state.unittest = action.payload;
      state.results = state.unittest.cases.map((_) => ({ waiting: true }));
    },
    runUnittest: (state: SliceContent, action: PayloadAction<string>) => {
      const userCode = action.payload;
      const goalResults = runUnittest(state.unittest, userCode);

      state.results = goalResults;
    },
  },
  selectors: {
    getUnittestCases: (state) => state.unittest.cases,
    getUnittestVars: (state) => state.unittest.resultVars,
    getUnittestTemplate: (state) => state.unittest.template,
    getUnittestTitle: (state) => state.unittest.title,
    getUnittestId: (state) => state.unittest.id,
    getUnittestResults: (state) => state.results,
  },
});
