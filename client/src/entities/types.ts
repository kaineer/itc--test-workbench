interface Item {
  id: string;
  uuid: string;
  title: string;
  html: string;
}

export interface TaskData extends Item {
}

export interface CourseData extends Item {
  tasks: TaskData[];
}
