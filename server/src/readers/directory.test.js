import { it, expect } from 'vitest'
import { directory } from './directory'
import { getFixturePath } from '../utils/fixtures'

const fixturePath = getFixturePath(import.meta.url);

it('should be a function', () => {
  expect(typeof directory).toBe('function');
});

it('should define if directory exists', () => {
  const dir = directory(fixturePath);
  expect(dir.exists()).toBeTruthy();
});

it('should define if directory does not exist', () => {
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
  const files = dir.files().sort();

  expect(files).toEqual(["01", "02", "content.txt"]);
});

it("should be able to produce subdir object", () => {
  const dir = directory(fixturePath);
  const testDir = dir.subdir("tests");

  expect(testDir.exists()).toBeTruthy();
  expect(
    testDir.file("01.js").includes("hello, subdir")
  ).toBeTruthy();
});
