import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TitlePage from './pages/TitlePage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import EmailVerificationPage from './pages/EmailVerificationPage'
import CalendarPage from './pages/CalendarPage'
import CalendarDetailPage from './pages/CalendarDetailPage'
import ReportPage from './pages/ReportPage'
import AlarmPage from './pages/AlarmPage'
import MyPage from './pages/MyPage'
import NotFoundPage from './pages/NotFoundPage'
import MainLayout from './layouts/MainLayout'
import './App.css'

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
          <Route
            path="/emailverification"
            element={<EmailVerificationPage />}></Route>
          <Route element={<MainLayout />}>
            <Route
              path="/home"
              element={<HomePage />}></Route>
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
              path="/alarm"
              element={<AlarmPage />}></Route>
            <Route
              path="/my"
              element={<MyPage />}></Route>
            <Route
              path="*"
              element={<NotFoundPage />}></Route>{' '}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
