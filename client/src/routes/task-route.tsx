import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { MainContainer } from "../components/layout/MainContainer";
import { Sidebar } from "../components/layout/sidebar/Sidebar";
import { Stages } from "../components/layout/stages/Stages";
import { stageSlice } from "@slices/stage";

export const TaskRoute = () => {
  const { taskId } = useParams();
  const { setTask } = stageSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTask(taskId));
  }, [taskId]);

  return (
    <MainContainer>
      <Sidebar />
      <Stages />
    </MainContainer>
  );
}
