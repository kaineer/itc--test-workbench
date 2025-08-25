import { useSelector } from "react-redux";
import { Button } from "./Button";
import { CourseListIcon } from "./Icons";
import { stageList, stageSlice } from "../../../../store/slices/stage";

interface Props {
  onClick: () => void;
}

export const CourseListButton = ({ onClick }: Props) => {
  const title = "Список курсов";
  const { getStage } = stageSlice.selectors;
  const stage = useSelector(getStage);

  return (
    <Button onClick={onClick} title={title} active={stage === stageList }>
      <CourseListIcon />
    </Button>
  );
}
