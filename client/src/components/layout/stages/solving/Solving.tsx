import { LeftPanel } from "@components/panels/LeftPanel"
import { RightPanel } from "@components/panels/RightPanel"
import { ButtonGroup } from "@layout/code-editor/ButtonGroup"
import { SyntaxChecker } from "@layout/code-editor/SyntaxChecker"
import { TextArea } from "@layout/code-editor/TextArea"
import { Tasks } from "@layout/Tasks"

export const Solving = () => {
  return (
    <>
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
