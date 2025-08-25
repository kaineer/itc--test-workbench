import { useSelector } from "react-redux";
import { stageDescription, stageSlice } from "../../../../store/slices/stage";
import { Button } from "./Button";
import { DescriptionIcon } from "./Icons";

interface Props {
  onClick: () => void;
}

export const DescriptionButton = ({ onClick }: Props) => {
  const title = "Описание";
  const { getStage } = stageSlice.selectors;
  const stage = useSelector(getStage);

  return (
    <Button onClick={onClick} title={title} active={stage === stageDescription }>
      <DescriptionIcon />
    </Button>
  );
}
