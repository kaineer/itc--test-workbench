import { Converter } from 'showdown'
import { parse } from 'yaml'

const getTitle = (markdown) => {
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

const stripMarkdownBlock = (lines) => {
  if (lines[0].startsWith("```yaml") && lines[lines.length - 1] === "```") {
    return lines.slice(1, -1);
  }
  return lines;
}

const splitMeta = (source) => {
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

export const metamarkdown = (source) => {
  // try {
    const [ meta, text] = splitMeta(source);
    const html = (new Converter).makeHtml(text);
    const title = getTitle(text) || String(meta.title);

    return {
      ok: true,
      meta,
      text,
      html,
      title,
    };
  // } catch (err) {
  //   return { ok: false, message: String(err) }
  // }
}
