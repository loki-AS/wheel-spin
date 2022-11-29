import { Navigate, Route, Routes } from "react-router-dom"
import Game from "./components/Game"
import Login from "./components/Login"
import ResultsPage from "./components/ResultsPage"

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/game" element={<Game />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/result" element={<ResultsPage /> } />
    </Routes>
  )
}

export default App
