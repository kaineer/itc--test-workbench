import { useEffect } from "react";
import { MainContainer } from "../components/layout/MainContainer";
import { Sidebar } from "../components/layout/sidebar/Sidebar";
import { Stages } from "../components/layout/stages/Stages";
import { stageSlice } from "../store/slices/stage";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";

export const CourseRoute = () => {
  const { courseId } = useParams();
  const { setCourse } = stageSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCourse(courseId));
  }, [courseId]);

  return (
    <MainContainer>
      <Sidebar />
      <Stages />
    </MainContainer>
  );
}
