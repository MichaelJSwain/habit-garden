import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Dashboard } from './pages/Dashboard'
import { HabitDetailView } from './pages/HabitDetailView'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/habits" element={<Dashboard/>} ></Route>
          <Route path="/habits/:id" element={<HabitDetailView/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
