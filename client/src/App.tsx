import './App.css'
import { MainContainer } from './components/layout/MainContainer'
import { Sidebar } from './components/layout/sidebar/Sidebar'
import { Stages } from './components/layout/stages/Stages'

function App() {
  return (
    <MainContainer>
      <Sidebar />
      <Stages />
    </MainContainer>
  )
}

export default App
