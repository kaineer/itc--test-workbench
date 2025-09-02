import { useSelector } from "react-redux";
import { Solving } from "./solving/Solving";
import { Courses } from "./courses-list/Courses";
import { Course } from "./course/Course";
import { Description } from "./description/Description";
import { stageCourse, stageDescription, stageList, stageSlice, stageTask } from "@slices/stage";

export const Stages = () => {
  const { getStage } = stageSlice.selectors;
  const stage = useSelector(getStage);

  return (
    <>
      { stage === stageList && <Courses /> }
      { stage === stageCourse && <Course /> }
      { stage === stageTask && <Solving /> }
      { stage === stageDescription && <Description /> }
    </>
  );
}
