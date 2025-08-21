import './App.css'
import { ButtonGroup } from './components/layout/ButtonGroup'
import { MainContainer } from './components/layout/MainContainer'
import { TextArea } from './components/layout/TextArea'
import { LeftPanel } from './components/panels/LeftPanel'
import { RightPanel } from './components/panels/RightPanel'
import { Tasks } from './components/layout/Tasks'
import { SyntaxChecker } from './components/layout/code/SyntaxChecker'
import { UnittestLoader } from './components/loaders/UnittestLoader'

function App() {
  return (
    <MainContainer>
      <UnittestLoader />
      <LeftPanel>
        <TextArea />
        <SyntaxChecker />
        <ButtonGroup/>
      </LeftPanel>
      <RightPanel>
        <Tasks />
      </RightPanel>
    </MainContainer>
  )
}

export default App
