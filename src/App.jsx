import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TitlePage from './pages/TitlePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import CalendarPage from './pages/CalendarPage'
import CalendarDetailPage from './pages/CalendarDetailPage'
import ReportPage from './pages/ReportPage'
import MobileLinkPage from './pages/MobileLinkPage'
import InfoPage from './pages/InfoPage'
import NotFoundPage from './pages/NotFoundPage'
import MainLayout from './layouts/MainLayout'
import RequiredAuthLayout from './layouts/RequiredAuthLayout'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<TitlePage />}></Route>
          <Route
            path="/login"
            element={<LoginPage />}></Route>
          <Route
            path="/register"
            element={<RegisterPage />}></Route>
          <Route element={<MainLayout />}>
            <Route
              path="/calendar"
              element={<CalendarPage />}></Route>
            <Route
              path="/calendar/:id"
              element={<CalendarDetailPage />}></Route>
            <Route
              path="/report"
              element={<ReportPage />}></Route>
            <Route
              path="/more"
              element={<MobileLinkPage />}></Route>
          </Route>
          <Route element={<RequiredAuthLayout />}>
            <Route
              path="/myinfo"
              element={<InfoPage />}></Route>
          </Route>
          <Route
            path="*"
            element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
