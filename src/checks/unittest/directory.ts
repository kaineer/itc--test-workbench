import { type Stats, existsSync, readFileSync, readdirSync, statSync } from "fs"
import { join } from "path"

export interface Directory {
  exists: () => boolean;
  file: (name: string) => string;
  files: () => string[];
  directories: () => string[];
  subdir: (sub: string) => Directory;
}

const wrapStat = (fn: (stat: Stats) => boolean) => (filename: string): boolean => {
  const stat = statSync(filename);
  return fn(stat);
}

const isDirectory = wrapStat((stat) => stat.isDirectory());
const isFile = wrapStat((stat) => stat.isFile());

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
    return readdirSync(dir).filter((f) => isFile(join(dir, f)));
  },
  directories(): string[] {
    return readdirSync(dir).filter((f) => isDirectory(join(dir, f)));
  },
  subdir(sub: string) {
    return directory(join(dir, sub));
  }
});
