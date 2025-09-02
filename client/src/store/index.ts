import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { codeSlice } from '@slices/code';
import { unittestSlice } from '@slices/unittest';
import { stageSlice } from '@slices/stage';
import { coursesApi } from '@api/courses';
import { taskApi } from '@api/task';

const reducer = combineReducers({
  // UI
  [codeSlice.reducerPath]: codeSlice.reducer,
  [unittestSlice.reducerPath]: unittestSlice.reducer,
  [stageSlice.reducerPath]: stageSlice.reducer,

  // API
  [coursesApi.reducerPath]: coursesApi.reducer,
  [taskApi.reducerPath]: taskApi.reducer,
});

export const setupStore = () => configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      coursesApi.middleware,
      taskApi.middleware,
    )
  },
});
