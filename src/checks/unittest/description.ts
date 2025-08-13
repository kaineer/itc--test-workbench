import { join } from "path"
import { readFileSync } from "fs"

export const readAndTransform = (directory: string): string => {
  try {
    const fullPath = join(directory, "description.md");
    const content = readFileSync(fullPath).toString();
  } catch (err) {
    return "";
  }

  // 1. Join directory + "/description.md"
  // 2. If file is not found, return empty string
  // 3. Read file
  // 4. Apply markdown transformer
}
