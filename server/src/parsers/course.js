import { metamarkdown } from "./metamarkdown";
import { task } from "./task"

const loadDirectory = (taskDir, { tasks, hash, uuid }) => (name) => {
  const dir = taskDir.subdir(name);
  const taskObj = task(dir);

  tasks.push(taskObj);
  hash[taskObj.uuid] = taskObj;
  taskObj.courseUUID = uuid;
}

export const course = (dir) => {
  const desc = metamarkdown(dir.file("description.md"));
  const taskDir = dir.subdir("tasks");
  const ctx = { tasks: [], hash: {}, uuid: dir.UUID() };

  const loadTaskDirectory = loadDirectory(
    taskDir, ctx
  );

  taskDir.directories().forEach(loadTaskDirectory);

  return {
    path: dir.path(),
    ...ctx, // uuid, tasks, hash
    title: desc.title,
    html: desc.html,
  }
}
