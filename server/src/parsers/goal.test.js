import { describe, it, expect } from 'vitest'
import { goal } from './goal'
import { directory } from '../readers/directory'
import { getFixturePath } from '../utils/fixtures';

const fixturePath = getFixturePath(import.meta.url);
const dir = directory(fixturePath);

it("should be a function", () => {
  expect(typeof goal).toBe('function');
});

describe("with tags in comments", () => {
  const filename = "tags.js";
  const content = dir.file(filename);
  const g = goal(content, filename);

  it("should return an object", () => {
    expect(g).toBeTypeOf("object");
  });

  it("should return an id", () => {
    expect(g.id).toBe(filename);
  });

  it("should return object with title", () => {
    expect(g.title).toBe("check everything");
  });

  it("should return dependencies list", () => {
    expect(g.depends).toEqual(["meta.js"]);
  });

  it("should return code without comments", () => {
    expect(g.code.includes("tags message")).toBeTruthy();
    expect(g.code.includes("DEPENDS")).toBeFalsy();
  });

  it("should return resultVars", () => {
    expect(g.resultVars).toEqual(["hello"]);
  });
});

describe("with yaml in comments", () => {
  const filename = "meta.js";
  const content = dir.file(filename);
  const g = goal(content, filename);

  it("should return an object", () => {
    expect(g).toBeTypeOf("object");
  });

  it("should return an id", () => {
    expect(g.id).toBe(filename);
  });

  it("should return object with title", () => {
    expect(g.title).toBe("check everything");
  });

  it("should return dependencies list", () => {
    expect(g.depends).toEqual(["tags.js", "meta.js"]);
  });

  it("should return code without comments", () => {
    expect(g.code.includes("meta message")).toBeTruthy();
    expect(g.code.includes("depends:")).toBeFalsy();
  });
});
