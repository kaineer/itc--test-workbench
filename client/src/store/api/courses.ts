import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { CourseData } from "../../entities/types";

export const coursesApi = createApi({
  reducerPath: 'courses/api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:6401' }),
  endpoints: (build) => ({
    getList: build.query<CourseData[], void>({
      query: () => "/courses"
    })
  })
});

export const {
  useGetListQuery,
} = coursesApi;
