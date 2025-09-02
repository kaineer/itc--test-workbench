import { UnittestLoader } from "../../../loaders/UnittestLoader"
import { LeftPanel } from "../../../panels/LeftPanel"
import { RightPanel } from "../../../panels/RightPanel"
import { ButtonGroup } from "../../code-editor/ButtonGroup"
import { TextArea } from "../../code-editor/TextArea"
import { SyntaxChecker } from "../../code/SyntaxChecker"
import { Tasks } from "../../Tasks"

export const Solving = () => {
  return (
    <>
      <UnittestLoader />
      <LeftPanel>
        <TextArea />
        <SyntaxChecker />
        <ButtonGroup />
      </LeftPanel>
      <RightPanel>
        <Tasks />
      </RightPanel>
    </>
  )
}
