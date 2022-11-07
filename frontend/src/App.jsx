import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Background from "./components/UI Components/Background/Background"
import HomePage from "./pages/HomePage"
import Socials from "./components/UI Components/Socials/Socials"
import Navbar from "./components/UI Components/Navbar/Navbar"
import "./App.css"

function App() {
  return (
    <div className="container">
      <Background>
        <Router>
          <Socials /> 
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </Background>
    </div>
  )
}

export default App
