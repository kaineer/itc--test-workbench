export const testcase = (dir: Directory, name: string) => {
  const content = dir.file(name);
  const results = []; // TODO: get results from content

  return {
    results,
    content,
  };
}
