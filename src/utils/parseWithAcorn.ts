import { parse } from "acorn"

export const parseWithAcorn = (code: string) => parse(
  code,
  { ecmaVersion: 2020 }
);
