import type { TestCase } from "../unittest/testcase";
import type { Unittest } from "../unittest/unittest";
import { runner } from "./runner";
import { lines } from "../../utils/fixtures";

const injectExtraction = (vars: string[], userCode: string) => {
  const resultVar = "__result";
  const indent = l => "  " + l;

  // "first" =>
  //   __result.first = (
  //      typeof first === 'undefined' ?
  //      void 0 : first
  //   );
  const extraction = v => (
    resultVar + "." + v +
      " = (typeof " + v +
      " === 'undefined' ? void 0 : " + v + ")"
  );

  return lines(
    "const result = (() => {",
    ...userCode.split("\n").map(indent),
    "",
    "  const " + resultVar + " = {};",
    ...vars.map(extraction).map(indent),
    "  return " + resultVar + ";",
    "})();",
  );
}

const buildCode = (tc: TestCase, userCode: string) => {
  return lines(
    injectExtraction(tc.results, userCode),
    tc.content,
  );
}

export const runUnittest = (ut: Unittest, userCode: string) => {
  return ut.cases.map((tc) => {
    const code = buildCode(tc, userCode);
    const result = runner(code);

    return {
      ok: !result.failed,
      failed: result.failed,
      title: tc.title,
      message: result.message,
    }
  });
}
