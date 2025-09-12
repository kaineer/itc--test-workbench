import { createSlice } from '@reduxjs/toolkit';

interface CodeContent {
  code: string;
  valid: boolean;
  unittestId: string;
}

const initialValue = "";

const initialState: CodeContent = {
  code: initialValue,
  unittestId: null,
  valid: false,
}

export const codeSlice = createSlice({
  name: 'code',
  initialState,
  reducers: {
    setUnittestId: (state, action) => {
      state.unittestId = action.payload;
    },
    setCode: (state, action) => {
      state.code = action.payload;
    },
    resetCode: (state) => {
      state.code = initialValue;
    },
    setValid: (state, action) => {
      state.valid = action.payload;
    },
  },
  selectors: {
    getCode: (state) => state.code,
    getUnittestId: (state) => state.unittestId,
    getCodeIsValid: (state) => state.valid,
  },
})
