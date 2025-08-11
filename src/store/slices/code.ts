import { createSlice } from '@reduxjs/toolkit';

interface CodeContent {
  code: string;
}

const initialState: CodeContent = {
  code: "bububub"
}

export const codeSlice = createSlice({
  name: 'code',
  initialState,
  reducers: {
    setCode: (state, action) => {
      state.code = action.payload;
    }
  },
  selectors: {
    getCode: (state) => state.code,
  },
})
