import { existsSync, readFileSync, writeFileSync, readdirSync, statSync, unlinkSync } from 'fs';
import { join } from 'path';
import { v4 as uuid } from 'uuid';

const wrapStat = (fn) => (filename) => {
  const stat = statSync(filename);
  return fn(stat);
}

const isDirectory = wrapStat((stat) => stat.isDirectory());
const isFile = wrapStat((stat) => stat.isFile());

export const directory = (dir) => {
  const file = (name, value = void 0) => {
    const fullPath = join(dir, name);
    if (typeof value === 'undefined') {
      if (existsSync(fullPath)) {
        const content = readFileSync(fullPath).toString();
        return content;
      }
      return "";
    } else {
      writeFileSync(fullPath, String(value));
    }
  }

  const rmFile = (name) => {
    const fullPath = join(dir, name);
    unlinkSync(fullPath);
  }

  return {
    UUID() {
      const existingUuid = file("uuid");
      if (existingUuid !== "") {
        return existingUuid;
      }
      const id = uuid();
      file("uuid", id);
      return id;
    },
    rmUUID() {
      const existingUuid = file("uuid");
      if (existingUuid) {
        const fullPath = join(dir, "uuid");
        unlinkSync(fullPath);
      }
    },
    exists() {
      return existsSync(dir);
    },
    file,
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
