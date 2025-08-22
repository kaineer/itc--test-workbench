import { split, lines, startsWith } from "../utils/text";
import { parse } from 'yaml';
import { parseWithAcorn } from '../utils/parseWithAcorn'

const taskTagPrefix = "TASK:";
const depTagPrefix = "DEPENDS:";

const loadMetadataByTags = (comments) => {
  const result = {
    title: "",
    depends: [],
  };

  comments.forEach((line) => {
    if (line.startsWith(taskTagPrefix)) {
      result.title = line.slice(taskTagPrefix.length).trim();
    } else if (line.startsWith(depTagPrefix)) {
      result.depends = line
        .slice(depTagPrefix.length)
        .split(",").map((p) => p.trim());
    }
  });

  return result;
}

const loadMetadataAsYAML = (comments) => {
  const source = lines(...comments);
  const data = {
    title: "fix the title",
    depends: [],
    ...parse(source)
  };

  return data;
}

const loadMetadata = (source) => {
  const comments = split(source)
    .filter(startsWith("// "))
    .map((l) => l.slice("//".length).trimLeft());
  const tagFound = !!comments.find((l) => l.startsWith("TASK:"));

  if (tagFound) {
    return loadMetadataByTags(comments);
  } else {
    return loadMetadataAsYAML(comments);
  }
}

const getCode = (source) => {
  const code = split(source)
    .filter((l) => !l.startsWith("// "))
    .map((l) => l.trim());

  return code.join("\n");
}

const type = (t) => (n) => n.type === t;
const varDeclaration = type('VariableDeclaration');

const getResultVars = (code) => {
  const ast = parseWithAcorn(code);
  const declaration = ast.body.filter(varDeclaration)[0];
  return declaration.declarations[0].id.properties.map((n) => (
    n.key.name
  ));
}

const fixExtension = (extension = ".js") => (name) => {
  if (name.endsWith(extension)) {
    return name;
  }
  return name + extension;
}

const fixDependencies = (meta) => {
  if (Array.isArray(meta.depends) &&
    meta.depends.length > 0) {
    meta.depends = meta.depends.map(fixExtension());
  }
  return meta;
}

/**
 * Load goal data from js file
 *
 * @param {string} source - javascript code
 * @param {string} name - basename to use as id
 */
export const goal = (source, name) => {
  const meta = fixDependencies(loadMetadata(source));
  const code = getCode(source);
  const resultVars = getResultVars(code);

  return {...meta, code, resultVars, id: name};
}
