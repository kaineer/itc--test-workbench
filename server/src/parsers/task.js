import { metamarkdown } from './metamarkdown'
import { goal } from './goal'

export const task = (dir) => {
  const desc = metamarkdown(dir.file("description.md"));
  const tpl = dir.file("template.js");

  const testsDir = dir.subdir("tests");
  const files = testsDir.exists() ? testsDir.files().filter((f) => f.endsWith(".js")) : [];

  const goals = files.map((f) => goal(testsDir.file(f), f));

  // TODO: а еще надо resultVars перенести

  return {
    title: desc.title,
    description: desc,
    template: tpl,
    cases: goals,
  }
}
