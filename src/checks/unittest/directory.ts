import { existsSync, readFileSync, readdirSync } from "fs"
import { join } from "path"

export interface Directory {
  exists: () => boolean;
  file: (name: string) => string;
  files: () => string[];
  subdir: (sub: string) => Directory
}

export const directory = (dir: string): Directory => ({
  exists(): boolean {
    return existsSync(dir);
  },
  file(name: string): string {
    const fullPath = join(dir, name);
    const content = readFileSync(fullPath).toString();
    return content;
  },
  files(): string[] {
    return readdirSync(dir);
  },
  subdir(sub: string) {
    return directory(join(dir, sub));
  }
});
