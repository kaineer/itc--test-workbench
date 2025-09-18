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
  solved: boolean;
}

const initialState: SliceContent = {
  unittest: blankUnittest,
  results: [],
  solved: false,
}

export const unittestSlice = createSlice({
  name: 'unittest',
  initialState,
  reducers: {
    setUnittest: (state: SliceContent, action: PayloadAction<UnittestData>) => {
      state.unittest = action.payload;
      state.results = state.unittest.cases.map((_) => ({ waiting: true }));
      state.solved = false;
    },
    runUnittest: (state: SliceContent, action: PayloadAction<string>) => {
      const userCode = action.payload;
      const goalResults = runUnittest(state.unittest, userCode);

      const getPrevCode = () => {
        try {
          return JSON.parse(localStorage.itcJavascript || "{}");
        } catch (err) {
          return {};
        }
      }

      const solved = goalResults.every(({ ok }) => ok);

      if (solved) {
        const prevCode = getPrevCode();
        const { id } = state.unittest;
        prevCode[id] = userCode;
        localStorage.itcJavascript = JSON.stringify(prevCode);
      }

      state.results = goalResults;
      state.solved = solved;
    },
  },
  selectors: {
    getUnittestCases: (state) => state.unittest.cases,
    getUnittestVars: (state) => state.unittest.resultVars,
    getUnittestTemplate: (state) => state.unittest.template,
    getUnittestTitle: (state) => state.unittest.title,
    getUnittestId: (state) => state.unittest.id,
    getUnittestResults: (state) => state.results,
    getUnittestSolved: (state) => state.solved,
  },
});
