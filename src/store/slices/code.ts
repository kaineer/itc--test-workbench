import { createSlice } from '@reduxjs/toolkit';

interface CodeContent {
  code: string;
}

const initialValue = "bububub";

const initialState: CodeContent = {
  code: initialValue
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
  },
  selectors: {
    getCode: (state) => state.code,
  },
})
