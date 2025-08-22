import { it, expect } from 'vitest'
import { course } from './course'

import { directory } from '../readers/directory'
import { getFixturePath } from '../utils/fixtures';

const fixturePath = getFixturePath(import.meta.url);
const dir = directory(fixturePath);

it("should be a function", () => {
  expect(course).toBeTypeOf("function");
});

it("should get a title", () => {
  const { title } = course(dir);
  expect(title).toBe("Course title");
});
