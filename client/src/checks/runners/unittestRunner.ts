import type { TestCase, Unittest } from "@/types/types";
import { lines } from "../../utils/text";
import { runner } from "./runner";

const injectExtraction = (vars: string[], userCode: string) => {
  const resultVar = "__result";
  const indent = (l: string) => "  " + l;

  // "first" =>
  //   __result.first = (
  //      typeof first === 'undefined' ?
  //      void 0 : first
  //   );
  const extraction = (vavName: string) => (
    resultVar + "." + vavName +
      " = (typeof " + vavName +
      " === 'undefined' ? void 0 : " + vavName + ")"
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
    injectExtraction(tc.resultVars, userCode),
    tc.code,
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
