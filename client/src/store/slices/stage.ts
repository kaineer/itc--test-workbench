import { createSlice } from "@reduxjs/toolkit";

export const stageDescription = "description";
export const stageTask = "task";
export const stageCourse = "course";
export const stageList = "list";

interface StageContent {
  stage: (
    "description" | "task" | "course" | "list"
  );
  course: string;
  task: string;
}

const initialState: StageContent = {
  stage: "list",
  course: "",
  task: "",
}

export const stageSlice = createSlice({
  name: 'stage',
  initialState,
  reducers: {
    setStage: (state, action) => {
      state.stage = action.payload;
    },
    setCourse: (state, action) => {
      const newCourse = action.payload;
      if (newCourse !== state.course) {
        state.course = newCourse;
        state.task = "";
        state.stage = stageCourse;
      }
    },
    setTask: (state, action) => {
      const newTask = action.payload;
      if (newTask !== state.task) {
        state.task = newTask;
        state.stage = stageDescription;
      }
    },
  },
  selectors: {
    getStage: (state) => state.stage,
    getCourse: (state) => state.course,
    getTask: (state) => state.task,
  },
});
