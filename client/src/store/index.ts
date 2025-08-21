import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { codeSlice } from './slices/code';
import { unittestSlice } from './slices/unittest';

const reducer = combineSlices(
  codeSlice,
  unittestSlice,
);

export const setupStore = () => configureStore({
  reducer
});
