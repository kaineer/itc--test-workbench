import { it, expect } from "vitest"
import { description as loadDescription } from "./description"
import { directory } from "./directory"

import { join, dirname } from "path"
import { getFixturePath } from "../../utils/fixtures";

const fixturePath = getFixturePath(import.meta.url);

const dir = directory(fixturePath);
const desc = loadDescription(dir);

it("should read it successfully and return html", () => {
  const { html } = desc;

  expect(html).toMatch("Sample test")
  expect(html).toMatch("<ul");
  expect(html).toMatch("<code");
});

it("should read it and return title", () => {
  const { title } = desc;

  expect(title).toBe("Sample test");
});
