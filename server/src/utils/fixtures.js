import { join, dirname, basename } from "path"

const metaUrlPrefix = 'file:/'

export const getFixturePath = (metaUrl, subdir) => {
  const __dirname = dirname(metaUrl.slice(metaUrlPrefix.length));

  if (typeof subdir === "undefined") {
    const testFile = basename(metaUrl);
    const dotIdx = testFile.indexOf(".");
    const sourceName = testFile.slice(0, dotIdx);

    return join(__dirname, "fixtures", sourceName);
  } else {
    if (subdir.includes("fixtures")) {
      return join(__dirname, subdir);
    }
    return join(__dirname, "fixtures", subdir);
  }
}
