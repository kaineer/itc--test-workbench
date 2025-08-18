import type { Directory } from "./directory";
import { metamarkdown, type MetaMarkdown } from "../parsers/metamarkdown";

export const description = (dir: Directory): MetaMarkdown => {
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
