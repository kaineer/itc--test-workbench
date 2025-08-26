import { course } from './course.js'

export const courses = (dir) => {
  const coursesDir = dir.subdir("courses");
  const list = [];
  const coursesHash = {};
  const tasksHash = {};

  coursesDir.directories().forEach((cd) => {
    const cdd = coursesDir.subdir(cd);
    const cc = course(cdd);
    cc.id = cd;

    list.push(cc);
    coursesHash[cc.uuid] = cc;

    cc.tasks.forEach((ct) => {
      tasksHash[ct.uuid] = ct;
    });
  });

  return {
    // Просто список курсов
    courses: list,
    // Курсы по uuid
    coursesHash,
    // Таски по uuid
    tasksHash,
  }
}
