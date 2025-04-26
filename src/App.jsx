import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Dashboard } from './pages/Dashboard'
import { HabitDetailView } from './pages/HabitDetailView/HabitDetailView'
import { UserAuthView } from './pages/UserAuthView/UserAuthView'
import { AuthProvider } from './context/AuthContext.jsx'
import { RequireAuth } from './components/route-components/RequireAuth.jsx'

function App() {
  return (    
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/habits" element={<RequireAuth><Dashboard/></RequireAuth>}></Route>
            <Route path="/habits/:id" element={<RequireAuth><HabitDetailView/></RequireAuth>} ></Route>
            <Route path="/" element={<UserAuthView/>}></Route>
          </Routes>
          </AuthProvider>
      </BrowserRouter>
  )
}

export default App
