// description, goals, title
const getGoal = (name, content) => {
  //  0. get filename as id
  //  1. get label for goal
  //  2. get dependencies for goal
  const lines = content.split("\n");
  const result = {
    id: name
  }

  lines.forEach((line) => {
    if (line.startsWith("// TASK:")) {
      const scPos = line.indexOf(":");
      result.title = line.slice(scPos + 1).trim();
    } else if (line.startsWith("// DEPENDS:")) {
      const scPos = line.indexOf(":");
      const dependencies = line.slice(scPos + 1).split(",").map((s) => s.trim());
      result.dependencies = dependencies.map((d) => {
        return d.endsWith(".js") ? d : d + '.js'
      });
    }
  });

  return result;
}

export const task = (dir) => {
  const desc = metamarkdown(dir.file("description.md"));
  const tpl = dir.file("template.js");

  const testsDir = dir.subdir("tests");
  const files = testsDir.exists() ? testsDir.files().filter((f) => f.endsWith(".js")) : [];

  const goals = files.map((f) => getGoal(f, testDir.file(f)));

  return {
    title: "", // TODO: get it
    description: desc,
    template: tpl,
    cases: goals,
  }
}
