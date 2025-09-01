import { useDispatch, useSelector } from "react-redux";
import { CourseButton } from "./CourseButton";
import { CourseListButton } from "./CourseListButton";
import { DescriptionButton } from "./DescriptionButton";
import { SolvingButton } from "./SolvingButton";
import { stageCourse, stageDescription, stageList, stageSlice, stageTask } from "@slices/stage";

export const Buttons = () => {
  const { getCourse, getTask } = stageSlice.selectors;
  const course = useSelector(getCourse);
  const task = useSelector(getTask);

  const dispatch = useDispatch();
  const { setStage } = stageSlice.actions;

  const dispatchStage = (stageValue: string) => () => {
    dispatch(setStage(stageValue));
  }

  const chooseDescription = dispatchStage(stageDescription);
  const chooseTask = dispatchStage(stageTask);
  const chooseCourse = dispatchStage(stageCourse);
  const chooseList = dispatchStage(stageList);

  return (
    <>
      { task !== "" && (<>
        <DescriptionButton onClick={ chooseDescription } />
        <SolvingButton onClick={ chooseTask } />
      </>) }
      { course !== "" && <CourseButton onClick={ chooseCourse } /> }
      <CourseListButton onClick={ chooseList } />
    </>
  );
}
