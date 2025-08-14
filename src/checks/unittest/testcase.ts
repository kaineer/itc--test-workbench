// https://astexplorer.net/#/gist/2f48c19cd268cc8b5bef5c3447fb6f97/c3c9f95a278bc61e3d33f94970e35b54c78c456f
//
import { parseWithAcorn } from "../../utils/parseWithAcorn";
import type { Directory } from "./directory";

const type = (t: string) => (n: any) => n.type === t;
const varDeclaration = type('VariableDeclaration');

const getVarNames = (ast: any) => {
  const declaration = ast.body.filter(varDeclaration)[0];
  return declaration.declarations[0].id.properties.map((n: any) => (
    n.key.name
  ));
}

export const testcase = (dir: Directory, name: string) => {
  const content = dir.file(name);
  const results: string[] = getVarNames(
    parseWithAcorn(content)
  );

  return {
    results,
    content,
  };
}
