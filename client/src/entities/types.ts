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

const itemSchema = z.object({
  id: z.string(),
  uuid: z.string(),
  title: z.string(),
  markdown: z.string(),
});

export const taskSchema = itemSchema;

export const courseSchema = itemSchema.extend({
  tasks: z.array(itemSchema),
});

export const taskSolutionSchema = z.object({
  courseRoute: z.string(),
  markdown: z.string(),
  resultVars: z.array(z.string()),
  template: z.string(),
  title: z.string(),
});
