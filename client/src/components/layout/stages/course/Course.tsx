import classes from "./Course.module.css";

import { useSelector } from "react-redux";
import { stageSlice } from "@slices/stage";
import { useGetCourseQuery } from "@api/courses";
import { Task } from "./Task";
import { MarkdownWithCode } from "@components/render/MarkdownWithCode";

export const Course = () => {
  const { getCourse } = stageSlice.selectors;
  const courseId = useSelector(getCourse);
  const { data: course } = useGetCourseQuery(courseId);
  const {
    tasks = [],
    title = "Course [noname]",
    markdown,
  } = course || {};

  return (
    <div className={classes.course}>
      { markdown && <MarkdownWithCode markdown={markdown} /> || <h1>{ title }</h1>}

      { tasks.map((task) => <Task key={task.id} task={task} />) }
    </div>
  );
}
