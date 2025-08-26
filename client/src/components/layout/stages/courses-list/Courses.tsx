import classes from './Courses.module.css'
import { useGetListQuery } from "../../../../store/api/courses"
import { Course } from "./Course"

export const Courses = () => {
  const { data, isLoading } = useGetListQuery();
  const { courses = [] } = data || {};

  return (
    <div className={classes.courses}>
      <h1>Courses list</h1>

      { data && !isLoading &&
        courses.map((course) => <Course key={course.id} course={course} />) }
    </div>
  )
}
