import { existsSync, readFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const wrapStat = (fn) => (filename) => {
  const stat = statSync(filename);
  return fn(stat);
}

const isDirectory = wrapStat((stat) => stat.isDirectory());
const isFile = wrapStat((stat) => stat.isFile());

export const directory = (dir) => {
  return {
    exists() {
      return existsSync(dir);
    },
    file(name) {
      const fullPath = join(dir, name);
      const content = readFileSync(fullPath).toString();
      return content;
    },
    files() {
      return (
        readdirSync(dir)
        .filter((f) => isFile(join(dir, f)))
      )
    },
    directories() {
      return readdirSync(dir).filter((f) => isDirectory(join(dir, f)));
    },
    subdir(sub) {
      return directory(join(dir, sub));
    }
  }
}
