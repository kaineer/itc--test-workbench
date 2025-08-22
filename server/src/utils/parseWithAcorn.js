import { parse } from "acorn"

export const parseWithAcorn = (code) => parse(
  code,
  { ecmaVersion: 2020 }
);
