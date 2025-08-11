import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { codeSlice } from './slices/code';

const reducer = combineSlices(
  codeSlice,
);

export const setupStore = () => configureStore({
  reducer
});
