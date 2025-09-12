import { Button } from "./Button";
import { CopyResultsIcon } from "./Icons";

export const CopyResultsButton =({}: Props) => {
  const title = "Копируем результаты";
  const handleClick = () => {
    const resultStr = localStorage.itcJavascript;
    if (typeof resultStr === 'string') {
      navigator.clipboard.writeText(resultStr);
    }
  }

  return (
    <Button onClick={handleClick}>
      <CopyResultsIcon />
    </Button>
  )
}
