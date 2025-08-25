import { useSelector } from "react-redux";
import { stageCourse, stageDescription, stageList, stageSlice, stageTask } from "../../../store/slices/stage"
import { Solving } from "./solving/Solving";

export const Stages = () => {
  const { getStage } = stageSlice.selectors;
  const stage = useSelector(getStage);

  return (
    <>
      { stage === stageList && <h1>Courses list</h1> }
      { stage === stageCourse && <h1>Course</h1> }
      { stage === stageTask && <Solving /> }
      { stage === stageDescription && <h1>Description</h1> }
    </>
  );
}
