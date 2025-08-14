// --- Unittest loader

import { description } from "./description";
import { type TestCase, testcase } from "./testcase";

export interface Unittest {
  // i'm not sure where it should be taken from
  // maybe from description's first line
  title: string;
  // @see: description.ts
  description: string;
  template: string; // template for js-content in editor
  // case files in tests/ subdir
  //
  // @see: testcase.ts
  cases: TestCase[];
  // variable names to get from cases
  // later they should be used to get values
  // from runner, using instrumentation
  resultVars: string[];
}

const getResultVars = (cases: TestCase[]): string[] => {
  const vars = new Set();
  cases.forEach((c) => {
    c.results.forEach((v) => vars.add(v));
  });
  return [...vars];
}

export const unittest = (dir: string): Unittest | {} => {
  const desc = description(dir);
  const template = dir.file("template.js");

  if (desc.ok) {
    const testDir = dir.subdir("tests");
    const cases = testDir.files().filter((f) => f.endsWith('.js')).map(
      (f) => testcase(testDir, f)
    );
    const resultVars = getResultVars(cases);

    return {
      description: desc,
      template,
      cases,
      resultVars,
    }
  }

  return {};
}
