import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Dashboard } from './pages/Dashboard'
import { HabitDetailView } from './pages/HabitDetailView/HabitDetailView'
import { UserAuthView } from './pages/UserAuthView/UserAuthView'
import { AuthProvider } from './context/AuthContext.jsx'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/habits" element={<Dashboard/>}></Route>
          <Route path="/habits/:id" element={<HabitDetailView/>} ></Route>
          <Route path="/" element={<UserAuthView/>}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
