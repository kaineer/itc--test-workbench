import classes from "./Course.module.css";
import { useSelector } from "react-redux";
import { stageSlice } from "../../../../store/slices/stage"
import { useGetCourseQuery } from "../../../../store/api/courses";
import { Task } from "./Task";

export const Course = () => {
  const { getCourse } = stageSlice.selectors;
  const courseId = useSelector(getCourse);
  const { data: course, isLoading } = useGetCourseQuery(courseId);
  const {
    tasks = [],
    title = "Course [noname]"
  } = course || {};

  return (
    <div className={classes.course}>
      <h1>{ title }</h1>

      { tasks.map((task) => <Task key={task.id} task={task} />) }
    </div>
  );
}
