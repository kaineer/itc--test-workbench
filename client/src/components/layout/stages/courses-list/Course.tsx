import classes from './Course.module.css'
import type { CourseData } from "@entities/types";
import { Link } from 'react-router';

interface Props {
  course: CourseData;
}

export const Course = ({ course }: Props) => {
  return (
    <div className={classes.course}>
      <Link to={course.route} className={classes.link}>
        <b>{ course.id }</b>&nbsp;{ course.title }
      </Link>
    </div>
  );
}
