import './App.css'
import { ButtonGroup } from './components/layout/ButtonGroup'
import { MainContainer } from './components/layout/MainContainer'
import { ResetButton } from './components/buttons/ResetButton'
import { SendButton } from './components/buttons/SendButton'
import { TextArea } from './components/layout/TextArea'
import { LeftPanel } from './components/panels/LeftPanel'
import { RightPanel } from './components/panels/RightPanel'
import { Tasks } from './components/layout/Tasks'
import { SyntaxChecker } from './components/layout/code/SyntaxChecker'
import { useSelector } from 'react-redux'
import { codeSlice } from './store/slices/code'

function App() {
  const { getCodeIsValid } = codeSlice.selectors;
  const valid = useSelector(getCodeIsValid);

  return (
    <MainContainer>
      <LeftPanel>
        <TextArea />
        <SyntaxChecker />
        <ButtonGroup>
          <SendButton text={ valid ? "Проверить" : "Исправить" } />
          <ResetButton />
        </ButtonGroup>
      </LeftPanel>
      <RightPanel>
        <Tasks />
      </RightPanel>
    </MainContainer>
  )
}

export default App
