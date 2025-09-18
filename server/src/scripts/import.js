import { join, dirname } from 'path'
import { directory } from '../readers/directory.js'
import { courses } from '../parsers/courses.js'
import { course } from '../parsers/course.js'
import { task } from '../parsers/task.js'
import { writeFileSync } from 'fs'

const __dirname = dirname(import.meta.url.slice('file:/'.length));

const dir = directory(join(__dirname, '../../data'));
const { courses: list, coursesHash, tasksHash } = courses(dir);
const coursesRoutes = list.map((course) => ({ id: course.id, title: course.title, route: "/courses/" + course.uuid }));

const output = join(__dirname, '../../../client/public');

const wf = (path, object) => {
  const str = JSON.stringify(object);
  writeFileSync(join(output, path), str);
}

wf("courses.json", { courses: coursesRoutes });

Object.keys(coursesHash).forEach((uuid) => {
  const { path } = coursesHash[uuid];
  const courseData = course(directory(path));
  const { text, html, title } = courseData;
  const { tasks } = courseData;
  const tasksData = tasks.map((task) => {
    return {
      id: task.id,
      route: "/tasks/" + task.uuid,
      title: task.title,
    };
  });

  wf("courses/" + uuid + ".json", {
    title, html, markdown: text, tasks: tasksData
  });
});

Object.keys(tasksHash).forEach((uuid) => {
  const { path, courseUUID, nextUUID } = tasksHash[uuid];

  const taskData = task(directory(path));
  const { title, template, description, cases, resultVars } = taskData;

  wf("tasks/" + uuid + ".json", {
    title, template, markdown: description.text, cases, resultVars,
    nextRoute: nextUUID ? "/tasks/" + nextUUID : void 0,
    courseRoute: "/course/" + courseUUID
  });
});
