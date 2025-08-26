import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import './App.css'
import { MainContainer } from './components/layout/MainContainer'
import { Sidebar } from './components/layout/sidebar/Sidebar'
import { Stages } from './components/layout/stages/Stages'
import { CourseListRoute } from './routes/course-list-route'
import { CourseRoute } from './routes/course-route'
import { Provider } from 'react-redux'
import { setupStore } from './store'
import { TaskRoute } from './routes/task-route'

function App() {
  return (
    <Provider store={ setupStore() }>
      <BrowserRouter>
        <Routes>
          <Route path="courses" element={<CourseListRoute />} />
          <Route path="courses/:courseId" element={<CourseRoute />} />
          <Route path="tasks/:taskId" element={<TaskRoute />} />
          <Route path="*" element={<Navigate replace to="/courses" />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
