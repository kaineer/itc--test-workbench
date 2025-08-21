// --- Unittest loader

import type { MetaMarkdown } from "../parsers/metamarkdown";
import { description } from "./description";
import { type Directory } from "./directory";
import { type TestCase, testcase } from "./testcase";

export interface Unittest {
  id: string;
  /** Title to show in interface */
  title: string;
  /** Whole testcase description */
  description: MetaMarkdown & { ok: true };
  /** Template code */
  template: string;
  /** Testcases defined in tests/ subdir */
  cases: TestCase[];
  // variable names to get from cases
  // later they should be used to get values
  // from runner, using instrumentation
  resultVars: string[];
}

export const blankUnittest: Unittest = {
   title: "",
   description: { html: "" },
   template: "",
   cases: [],
   resultVars: [],
}

const getResultVars = (cases: TestCase[]): string[] => {
  const vars = new Set<string>();
  cases.forEach((c) => {
    c.results.forEach((v) => vars.add(v));
  });
  return [...vars];
}

export const unittest = (dir: Directory): Unittest | {} => {
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
