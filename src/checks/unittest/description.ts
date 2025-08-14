import { join } from "path";
import { readFileSync } from "fs";
import { Converter } from "showdown";
import type { Directory } from "./directory";

export interface Description {
  title: string;
  text: string;
  html: string;
}

const converter = new Converter;

const convertMarkdown = (markdown: string): string => {
  return converter.makeHtml(markdown);
}

const getTitle = (markdown: string): string => {
  const lines = markdown.split('\n');
  const line = lines.find((l) => l.startsWith('#'));

  if (line) {
    const spaceIdx = line.indexOf(" ");

    if (spaceIdx > -1) {
      return line.slice(spaceIdx).trim();
    }
  }

  return "";
}

export const description = (dir: Directory): Description => {
  try {
    const text = dir.file("description.md");
    const title = getTitle(text);
    const html = convertMarkdown(text);

    return {
      ok: true,
      title, text, html
    };
  } catch (err) {
    return { ok: false, error: err.toString() };
  }
}
