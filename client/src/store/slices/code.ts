import { createSlice } from '@reduxjs/toolkit';

interface CodeContent {
  code: string;
  valid: boolean;
}

const initialValue = "bububub";

const initialState: CodeContent = {
  code: initialValue,
  valid: false,
}

export const codeSlice = createSlice({
  name: 'code',
  initialState,
  reducers: {
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
    getCodeIsValid: (state) => state.valid,
  },
})
