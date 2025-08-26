import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import './App.css'
import { MainContainer } from './components/layout/MainContainer'
import { Sidebar } from './components/layout/sidebar/Sidebar'
import { Stages } from './components/layout/stages/Stages'
import { CourseListRoute } from './routes/course-list-route'
import { CourseRoute } from './routes/course-route'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="courses" element={<CourseListRoute />} />
        <Route path="courses/:courseId" element={<CourseRoute />} />
        <Route path="*" element={<Navigate replace to="/courses" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
