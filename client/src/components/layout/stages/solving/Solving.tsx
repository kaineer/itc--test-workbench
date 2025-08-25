import { UnittestLoader } from "../../../loaders/UnittestLoader"
import { LeftPanel } from "../../../panels/LeftPanel"
import { RightPanel } from "../../../panels/RightPanel"
import { ButtonGroup } from "../../ButtonGroup"
import { SyntaxChecker } from "../../code/SyntaxChecker"
import { Tasks } from "../../Tasks"
import { TextArea } from "../../TextArea"

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
