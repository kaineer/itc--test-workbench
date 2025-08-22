import { it, expect, afterAll } from 'vitest'
import { task } from './task'

import { directory } from '../readers/directory'
import { getFixturePath } from '../utils/fixtures';

const fixturePath = getFixturePath(import.meta.url);
const dir = directory(fixturePath);

afterAll(() => {
  dir.rmUUID();
});

it("should be a function", () => {
  expect(task).toBeTypeOf("function");
});

it("should return an object", () => {
  expect(task(dir)).toBeTypeOf("object");
});

it("should have a path to reread", () => {
  const { path } = task(dir);
  expect(path).toBe(fixturePath);
});

it("should have an uuid", () => {
  const { uuid } = task(dir);
  expect(uuid).toBeTypeOf('string');
});

it("should return a title for task", () => {
  expect(task(dir).title).toBe("Hello task");
});

it("should return a description", () => {
  const { description } = task(dir);
  expect(description).toBeTypeOf("object");
  expect(description.html).toContain("<ul");
  expect(description.meta).toEqual({ tag: "green" });
});

it("should return a template", () => {
  const { template } = task(dir);
  expect(template).toBeTypeOf("string");
  expect(template).toContain("hello = null");
});

it("should return cases", () => {
  const { cases } = task(dir);

  expect(Array.isArray(cases)).toBeTruthy();
  expect(cases.length).toBe(2);

  const case01 = cases[0];
  expect(case01.id).toBe("01.js");
  expect(case01.title).toBe("assert is function");
  expect(case01.depends).toEqual(["02.js"]);
  expect(case01.code).toBeTypeOf("string");
  expect(Array.isArray(case01.resultVars)).toBeTruthy();

  const case02 = cases[1];
  expect(case02.id).toBe("02.js");
  expect(case02.title).toBe("assert returns world");
  expect(case02.depends).toEqual([]);
});

it("should return resultVars", () => {
  const { resultVars } = task(dir);

  expect(resultVars).toEqual(["hello"]);
});
