import { MainContainer } from "../components/layout/MainContainer";
import { Sidebar } from "../components/layout/sidebar/Sidebar";
import { Stages } from "../components/layout/stages/Stages";

export const CourseListRoute = () => {
  return (
    <MainContainer>
      <Sidebar />
      <Stages />
    </MainContainer>
  );
}
