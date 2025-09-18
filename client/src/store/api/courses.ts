import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { CourseData } from "@entities/types";

export const coursesApi = createApi({
  reducerPath: 'courses/api',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (build) => ({
    getList: build.query<CourseData[], void>({
      query: () => "/courses.json"
    }),
    getCourse: build.query<CourseData, string>({
      query: (id) => "/courses/" + id + ".json",
    }),
  })
});

export const {
  useGetListQuery,
  useGetCourseQuery,
} = coursesApi;
