import { it, expect, afterAll } from 'vitest'
import { course } from './course'
import { courses } from './courses'
import { join } from 'path';

import { directory } from '../readers/directory'
import { getFixturePath } from '../utils/fixtures';

const fixturePath = getFixturePath(import.meta.url);
const dir = directory(fixturePath);

it("should be a function", () => {
  expect(courses).toBeTypeOf("function");
});

afterAll(() => {
  const courseDirs = dir.subdir("courses").directories();
  courseDirs.forEach((coursePath) => {
    const courseDir = directory(
      join(fixturePath, "courses", coursePath));

    const cc = course(courseDir);

    courseDir.rmUUID();
    const td = courseDir.subdir('tasks');
    td.directories().forEach((sd) => {
      const d = td.subdir(sd);
      d.rmUUID();
    });
  });
});

it("should get courses list", () => {
  const { courses: cl } = courses(dir);
  expect(Array.isArray(cl)).toBeTruthy();
  expect(cl.length).toBe(1);
});

it("should get courses hash", () => {
  const { courses: cl, coursesHash } = courses(dir);
  const fromList = cl[0];
  const fromHash = coursesHash[Object.keys(coursesHash)[0]];

  expect(fromList).toBe(fromHash);
});

it("should get tasks hash", () => {
  const { tasksHash } = courses(dir);
  expect(Object.keys(tasksHash).length).toBe(2);
});
