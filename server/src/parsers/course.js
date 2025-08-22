import { metamarkdown } from "./metamarkdown";
import { task } from "./task"

export const course = (dir) => {
  const desc = metamarkdown(dir.file("description.md"));
  const taskDir = dir.subdir("tasks");
  const tasks = [];
  const hash = {};
  const uuid = dir.UUID();

  taskDir.directories().forEach((td) => {
    const sd = taskDir.subdir(td);
    const t = task(sd);

    tasks.push(t);
    hash[t.uuid] = t;
    t.courseUUID = uuid;
  });

  return {
    uuid,
    title: desc.title,
    html: desc.html,
    tasks,
    hash,
  }
}
