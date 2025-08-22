// TODO: tests?

export const courses = (dir) => {
  const coursesDir = dir.subdir("courses");
  const courses = [];
  const coursesHash = {};
  const tasksHash = {};

  coursesDir.directories().forEach((cd) => {
    const cdd = coursesDir.subdir(cd);
    const cc = course(cdd);

    courses.push(cc);
    coursesHash[cc.uuid] = cc;

    cc.tasks.forEach((ct) => {
      tasksHash[ct.uuid] = ct;
    });
  });

  return {
    // Просто список курсов
    courses,
    // Курсы по uuid
    coursesHash,
    // Таски по uuid
    tasksHash,
  }
}
