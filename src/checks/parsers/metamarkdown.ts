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
  const yamlLines = [];
  const markdownLines = [];
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

export const metamarkdown = (source: string): MetaMarkdown => {
  const [ meta, text ] = splitMeta(source);
  const html = (new Converter).makeHtml(text);
  const title = getTitle(text) || meta.title;

  return {
    meta,
    text,
    html,
    title,
  };
}
