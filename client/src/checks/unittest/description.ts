import type { Directory } from "./directory";
import { metamarkdown, type MetaMarkdownResult } from "../parsers/metamarkdown";

export const description = (dir: Directory): MetaMarkdownResult => {
  try {
    const mmd = metamarkdown(dir.file("description.md"));

    return {
      ok: true,
      ...mmd,
    };
  } catch (err) {
    return { ok: false, error: err.toString() };
  }
}
