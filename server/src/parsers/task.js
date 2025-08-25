import { metamarkdown } from './metamarkdown.js'
import { goal } from './goal.js'
import { endsWith } from '../utils/text.js';

const getDescription = (dir) => metamarkdown(dir.file("description.md"));
const getTemplate = (dir) => dir.file("template.js");
const getUUID = (dir) => dir.UUID();
const getTitle = (description) => description.title;

const getCases = (dir) => {
  const testsDir = dir.subdir("tests");
  const files = testsDir.exists() ? testsDir.files().filter(endsWith(".js")) : [];
  const goals = files.map((f) => goal(testsDir.file(f), f));

  return goals;
}

const getResultVars = (cases) => {
  const rv = new Set;
  cases.forEach((cs) => {
    cs.resultVars.forEach((v) => rv.add(v));
  });
  return [...rv];
}

export const task = (dir) => {
  const description = getDescription(dir);
  const cases = getCases(dir);

  return {
    path: dir.path(),
    uuid: getUUID(dir),
    title: getTitle(description),
    description,
    template: getTemplate(dir),
    cases,
    resultVars: getResultVars(cases),
  }
}
