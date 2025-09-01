import { useSelector } from "react-redux";
import { Button } from "./Button";
import { SolvingIcon } from "./Icons";
import { stageSlice, stageTask } from "@slices/stage";

interface Props {
  onClick: () => void;
}

export const SolvingButton = ({ onClick }: Props) => {
  const title = "Пытаемся решить";
  const { getStage } = stageSlice.selectors;
  const stage = useSelector(getStage);

  return (
    <Button onClick={onClick} title={title} active={stage === stageTask }>
      <SolvingIcon />
    </Button>
  );
}
