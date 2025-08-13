import { join } from "path";
import { readFileSync } from "fs";
import { Converter } from "showdown";
import type { Directory } from "./directory";

// TODO: сделать здесь функцию description()
//  А уже внутри читать содержимое, трансформировать,
//  возвращать title, text и html

/**
 * Read description from directory and transform it to html
 *
 * @param directory - source directory for unittest
 */
export const readAndTransform = (dir: Directory): string => {
  try {
    const content = dir.file("description.md");
    const converter = new Converter;
    const html = converter.makeHtml(content);
    return html;
  } catch (err) {
    return err.toString();
  }
}
