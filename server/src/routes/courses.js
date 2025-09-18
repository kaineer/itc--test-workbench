//
import { directory } from '../readers/directory.js'
import { courses } from '../parsers/courses.js'
import { course } from '../parsers/course.js'
import { task } from '../parsers/task.js'
import { join, dirname } from 'path'

const __dirname = dirname(import.meta.url.slice('file:/'.length));

const dir = directory(join(__dirname, '../../data'));
const { courses: list, coursesHash, tasksHash } = courses(dir);

export default (fastify) => {
  fastify.get("/courses.json", (req, res) => {
    const coursesRoutes = list.map((course) => ({ id: course.id, title: course.title, route: "/courses/" + course.uuid }));
    res.send({ courses: coursesRoutes });
  });

  fastify.get("/courses/:uuid.json", (req, res) => {
    const { uuid } = req.params;
    const { path } = coursesHash[uuid];

    if (path) {
      const courseData = course(directory(path));
      if (courseData) {
        const { text, html, title } = courseData;
        const { tasks } = courseData;
        const tasksData = tasks.map((task) => {
          return {
            id: task.id,
            route: "/tasks/" + task.uuid,
            title: task.title,
          }
        });

        res.send({ title, html, markdown: text, tasks: tasksData });
      } else {
        res.status(404);
      }
    }
  });

  fastify.get("/tasks/:uuid.json", (req, res) => {
    const { uuid } = req.params;
    const { path, courseUUID } = tasksHash[uuid];

    const taskData = task(directory(path));
    const { title, template, description, cases, resultVars } = taskData;

    return { title, template, markdown: description.text, cases, resultVars,
      courseRoute: "/course/" + courseUUID
    };
  });
}
