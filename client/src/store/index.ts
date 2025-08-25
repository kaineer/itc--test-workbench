import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { codeSlice } from './slices/code';
import { unittestSlice } from './slices/unittest';
import { stageSlice } from './slices/stage';

const reducer = combineSlices(
  codeSlice,
  unittestSlice,
  stageSlice,
);

export const setupStore = () => configureStore({
  reducer
});
