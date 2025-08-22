import { metamarkdown } from './metamarkdown'
import { goal } from './goal'

export const task = (dir) => {
  const desc = metamarkdown(dir.file("description.md"));
  const tpl = dir.file("template.js");
  const uuid = dir.UUID();

  const testsDir = dir.subdir("tests");
  const files = testsDir.exists() ? testsDir.files().filter((f) => f.endsWith(".js")) : [];

  const goals = files.map((f) => goal(testsDir.file(f), f));

  const rv = new Set();

  goals.forEach((goal) => {
    goal.resultVars.forEach((v) => rv.add(v));
  });

  return {
    path: dir.path(),
    uuid,
    title: desc.title,
    description: desc,
    template: tpl,
    cases: goals,
    resultVars: [...rv],
  }
}
