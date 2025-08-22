import { it, expect, afterAll } from 'vitest'
import { course } from './course'

import { directory } from '../readers/directory'
import { getFixturePath } from '../utils/fixtures';

const fixturePath = getFixturePath(import.meta.url);
const dir = directory(fixturePath);

afterAll(() => {
  const cc = course(dir);

  dir.rmUUID();
  const td = dir.subdir('tasks');
  td.directories().forEach((sd) => {
    const d = td.subdir(sd);
    d.rmUUID();
  });
});

it("should be a function", () => {
  expect(course).toBeTypeOf("function");
});

it("should get a title", () => {
  const { title } = course(dir);
  expect(title).toBe("Course title");
});

it("should get a uuid", () => {
  const { uuid } = course(dir);
  expect(uuid).toBeTypeOf("string");
});

it("should get tasks", () => {
  const { tasks } = course(dir);

  expect(Array.isArray(tasks)).toBeTruthy();
  expect(tasks[0].title).toBe("First task");
  expect(tasks[1].title).toBe("Second task");
});

it("should get hash", () => {
  const { tasks, hash } = course(dir);
  const t = hash[tasks[0].uuid];

  expect(t.title).toBe(tasks[0].title);
});

it("should label tasks with courseUUID", () => {
  const { tasks, uuid } = course(dir);
  const [ t ] = tasks;
  expect(t.courseUUID).toBe(uuid);
});
