import { it, expect } from "vitest"
import { directory } from "./directory";
import { join, dirname } from "path"
import { getFixturePath } from "../../utils/fixtures";

const fixturePath = getFixturePath(import.meta.url);

it("should return true for existing directory", () => {
  const dir = directory(fixturePath);
  expect(dir.exists()).toBeTruthy();
});

it("should return false for non-existing directory", () => {
  const dir = directory(fixturePath + "abcdefghijk");
  expect(dir.exists()).not.toBeTruthy();
});

it("should be able to read file content", () => {
  const dir = directory(fixturePath);
  expect(dir.file("content.txt")).toBe(
    "hello, directory\n"
  );
});

it("should be able to enumerate files", () => {
  const dir = directory(fixturePath);
  const files = dir.files();

  expect(files.length).toBeGreaterThanOrEqual(2);
  expect(files.includes("01")).toBeTruthy();
  expect(files.includes("02")).toBeTruthy();
});

it("should be able to produce subdir object", () => {
  const dir = directory(fixturePath);
  const testDir = dir.subdir("tests");

  expect(testDir.exists()).toBeTruthy();
  expect(
    testDir.file("01.js").includes("hello, subdir")
  ).toBeTruthy();
});
