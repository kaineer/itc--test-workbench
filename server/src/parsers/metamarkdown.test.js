import { it, expect } from 'vitest'
import { metamarkdown } from './metamarkdown'
import { directory } from '../readers/directory'
import { getFixturePath } from '../utils/fixtures';

const fixturePath = getFixturePath(import.meta.url);
const dir = directory(fixturePath);

it("should be a function", () => {
  expect(typeof metamarkdown).toBe('function');
});

it('should parse simple markdown', () => {
  const markdown = dir.file("markdown.md");
  const mmd = metamarkdown(markdown);
  expect(mmd.ok).toBeTruthy();
  expect(mmd.error).toBe(void 0);
  expect(mmd.title).toBe("Markdown title");
  expect(mmd.text).toContain("Hello markdown");
  expect(mmd.html).toContain("<h1");
});

it("should parse markdown with yaml", () => {
  const withyaml = dir.file("withmeta.md");
  const mmd = metamarkdown(withyaml);

  expect(mmd.title).toBe("Markdown with meta");
  expect(mmd.text).toContain("Hello markdown with meta");
});

it("should parse yaml in markdown block", () => {
  const inblock = dir.file("blockmeta.md");
  const mmd = metamarkdown(inblock);

  expect(mmd.title).toBe("YAML in block");
  expect(mmd.text).toContain("Hello yaml in block");
});
