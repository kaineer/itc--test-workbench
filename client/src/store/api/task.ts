import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { TaskData } from "../../entities/types";

export const taskApi = createApi({
  reducerPath: 'task/api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:6401' }),
  endpoints: (build) => ({
    getTask: build.query<TaskData, string>({
      query: (id) => "/tasks/" + id,
    }),
  }),
});

export const {
  useGetTaskQuery,
} = taskApi;
