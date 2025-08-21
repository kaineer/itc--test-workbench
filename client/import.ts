import { unittest } from "./src/checks/unittest/unittest"
import { directory } from "./src/checks/unittest/directory"
import { join } from "path"

const path = "./data/unittest"

const dir = directory(path);

console.log(dir);
