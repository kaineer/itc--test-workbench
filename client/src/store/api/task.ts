import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { taskSolutionSchema, type TaskData } from "@entities/types";

export const taskApi = createApi({
  reducerPath: 'task/api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:6401' }),
  endpoints: (build) => ({
    getTask: build.query<TestcaseData, string>({
      query: (id) => "/tasks/" + id,
      responseSchema: taskSolutionSchema,
    }),
  }),
});

export const {
  useGetTaskQuery,
} = taskApi;
