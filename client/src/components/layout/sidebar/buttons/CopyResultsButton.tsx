import { useClipboard } from "@utils/clipboard";
import { Button } from "./Button";
import { CopyResultsIcon } from "./Icons";

const ticks = "```";
const wrapInTicks = (str: string) => [ticks, str, ticks].join("\n");

export const CopyResultsButton = () => {
  const title = "Копируем результаты";
  const { copyToClipboard } = useClipboard();
  const handleClick = () => {
    const resultStr = wrapInTicks(localStorage.itcJavascript);
    copyToClipboard(wrapInTicks(resultStr));
  }

  return (
    <Button title={title} onClick={handleClick}>
      <CopyResultsIcon />
    </Button>
  )
}
