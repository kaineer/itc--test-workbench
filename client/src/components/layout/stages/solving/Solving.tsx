import { LeftPanel } from "@components/panels/LeftPanel"
import { RightPanel } from "@components/panels/RightPanel"
import { ButtonGroup } from "@layout/code-editor/ButtonGroup"
import { SyntaxChecker } from "@layout/code-editor/SyntaxChecker"
import { TextArea } from "@layout/code-editor/TextArea"
import { Tasks } from "@layout/Tasks"
import { codeSlice } from "@slices/code"
import { stageSlice } from "@slices/stage"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export const Solving = () => {
  const { getTask } = stageSlice.selectors;
  const taskUUID = useSelector(getTask);
  const { setCode } = codeSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.itcLoadPrevious) {
      if (taskUUID) {
        const tasks = JSON.parse(localStorage.itcJavascript || '{}')
        const code = tasks[taskUUID];
        if (code) {
          dispatch(setCode(code));
        }
      }
    }
  }, [taskUUID]);

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
