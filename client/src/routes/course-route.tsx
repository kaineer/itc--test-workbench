import { useEffect } from "react";
import { MainContainer } from "../components/layout/MainContainer";
import { Sidebar } from "../components/layout/sidebar/Sidebar";
import { Stages } from "../components/layout/stages/Stages";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { stageSlice } from "@slices/stage";

export const CourseRoute = () => {
  const { courseId } = useParams();
  const { setCourse } = stageSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCourse(courseId));
  }, [courseId, dispatch, setCourse]);

  return (
    <MainContainer>
      <Sidebar />
      <Stages />
    </MainContainer>
  );
}
