import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { taskSolutionSchema, type TaskData } from "@entities/types";

export const taskApi = createApi({
  reducerPath: 'task/api',
  tagTypes: ['task'],
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (build) => ({
    getTask: build.query<TestcaseData, string>({
      query: (id) => "/tasks/" + id + ".json",
      responseSchema: taskSolutionSchema,
      providesTags: ['task'],
    }),
  }),
});

export const {
  useGetTaskQuery,
} = taskApi;
