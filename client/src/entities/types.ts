import { z } from 'zod';

interface Item {
  id: string;
  uuid: string;
  title: string;
  markdown: string;
  route: string;
}

export interface TaskData extends Item {
}

export interface CourseData extends Item {
  tasks: TaskData[];
}

export interface TestcaseData {
  title: string;
  depends: string[];
  code: string;
  resultVars: string[];
  id: string;
}

export interface UnittestData {
  id: string;
  title: string;
  resultVars: string[];
  cases: TestcaseData[];
  template: string;
}

const itemSchema = z.object({
  id: z.string(),
  uuid: z.string(),
  title: z.string(),
  markdown: z.string(),
});

const resultVarsSchema = z.array(z.string());

const testcaseSchema = z.object({
  title: z.string(),
  depends: z.array(z.string()),
  code: z.string(),
  resultVars: resultVarsSchema,
  id: z.string(),
});

export const taskSchema = itemSchema;

export const courseSchema = itemSchema.extend({
  tasks: z.array(itemSchema),
});

export const taskSolutionSchema = z.object({
  courseRoute: z.string(),
  markdown: z.string(),
  resultVars: resultVarsSchema,
  template: z.string(),
  title: z.string(),
  cases: z.array(testcaseSchema),
});
