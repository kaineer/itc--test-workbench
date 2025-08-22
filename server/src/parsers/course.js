import { metamarkdown } from "./metamarkdown";

// description, tasks
//  when from courses, do not load tasks
export const course = (dir) => {
  const desc = metamarkdown(dir.file("description.md"));
  const taskDirs = dir.directories();
  const tasks = [];

  return {
    title: desc.title,
    html: desc.html,
  }
}
