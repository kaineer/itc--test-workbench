import './App.css'
import { ButtonGroup } from './components/layout/ButtonGroup'
import { MainContainer } from './components/layout/MainContainer'
import { ResetButton } from './components/buttons/ResetButton'
import { SendButton } from './components/buttons/SendButton'
import { TextArea } from './components/layout/TextArea'
import { LeftPanel } from './components/panels/LeftPanel'
import { RightPanel } from './components/panels/RightPanel'
import { Tasks } from './components/layout/Tasks'

function App() {
  return (
    <MainContainer>
      <LeftPanel>
        <TextArea />
        <ButtonGroup>
          <SendButton text="Проверить" />
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
