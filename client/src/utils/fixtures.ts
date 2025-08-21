import { dirname, basename, join } from "path"

const metaUrlPrefix = 'file:/';

/**
 * Get fixture path for test
 *
 * @param metaUrl - usually a `import.meta.url` value
 * @param subdir - subdir from current dir to fixture
 */
export const getFixturePath = (
  metaUrl: string,
  subdir?: string
): string => {
  const __dirname = dirname(
    metaUrl.slice(metaUrlPrefix.length)
  );
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

export const lines = (...args: string[]): string => {
  return args.join("\n");
}
