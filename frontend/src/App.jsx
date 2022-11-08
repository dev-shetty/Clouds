import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Socials from "./components/UI Components/Socials/Socials"
import Navbar from "./components/UI Components/Navbar/Navbar"
import EventPage from "./pages/EventPage"
import "./App.css"

function App() {
  return (
    <div className="container">
      <Router>
        <Socials />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
