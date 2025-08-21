type MetaValues = string | number | boolean | string[];

type Meta = {[id: string]: MetaValues};

export interface MetaMarkdown {
  meta: Meta;
  text: string;
  html: string;
  title: string;
}

import { Converter } from "showdown";
import { parse } from "yaml";

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

const stripMarkdownBlock = (lines: string[]): string[] => {
  if (lines[0].startsWith("```yaml") && lines[lines.length - 1] === "```") {
    return lines.slice(1, -1);
  }
  return lines;
}

const splitMeta = (source: string): [Meta, string] => {
  const lines = source.split("\n");
  const yamlLines: string[] = [];
  const markdownLines: string[] = [];
  let meta = {};

  let yamlFound = false;
  lines.forEach((line) => {
    if (!yamlFound && line.trim() === "---") {
      yamlLines.push(...markdownLines);
      yamlFound = true;
    } else {
      markdownLines.push(line);
    }
  });

  if (yamlLines.length > 0) {
    meta = (
      parse(stripMarkdownBlock(yamlLines).join("\n")) ||
        {}
    );
  }

  return [
    meta,
    markdownLines.join("\n")
  ];
}

export type MetaMarkdownResult = (
  { ok: true } & MetaMarkdown |
  { ok: false, error?: string }
);

export const metamarkdown = (source: string): MetaMarkdownResult => {
  try {
    const [ meta, text ] = splitMeta(source);
    const html = (new Converter).makeHtml(text);
    const title = getTitle(text) || String(meta.title);

    return {
      ok: true,
      meta,
      text,
      html,
      title,
    };
  } catch (err) {
    return { ok: false };
  }
}
