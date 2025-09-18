import { useClipboard } from "@utils/clipboard";
import { Button } from "./Button";
import { CopyResultsIcon } from "./Icons";

export const CopyResultsButton = () => {
  const title = "Копируем результаты";
  const { copyToClipboard } = useClipboard();
  const handleClick = () => {
    const resultStr = localStorage.itcJavascript;
    if (typeof resultStr === 'string') {
      copyToClipboard(resultStr);
    }
  }

  return (
    <Button title={title} onClick={handleClick}>
      <CopyResultsIcon />
    </Button>
  )
}
