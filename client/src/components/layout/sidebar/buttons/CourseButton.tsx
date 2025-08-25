import { useSelector } from "react-redux";
import { stageCourse, stageSlice } from "../../../../store/slices/stage";
import { Button } from "./Button";
import { CourseIcon } from "./Icons";

interface Props {
  onClick: () => void;
}

export const CourseButton = ({ onClick }: Props) => {
  const title = "Список задач курса";
  const { getStage } = stageSlice.selectors;
  const stage = useSelector(getStage);

  return (
    <Button onClick={onClick} title={title} active={stage === stageCourse }>
      <CourseIcon />
    </Button>
  );
}
