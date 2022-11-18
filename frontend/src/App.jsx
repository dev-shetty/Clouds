import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Socials from "./components/UI Components/Socials/Socials"
import Navbar from "./components/UI Components/Navbar/Navbar"
import EventPage from "./pages/EventPage"
import { useState } from "react"
import Background from "./components/UI Components/Background/Background"
import Loading from "./components/Loading/Loading"
import "./App.css"

function App() {
  // Set loading to true if loading screen is needed else set it to false
  const [loading, setLoading] = useState(false)
  const [logoLoading, setLogoLoading] = useState(false)
  const LOADER_TIMER = 6000
  const [activate, setActivate] = useState(false)

  const websiteStart = () => {
    setTimeout(() => {
      setLoading(false)
    }, LOADER_TIMER)
    setTimeout(() => {
      setLogoLoading(true)
    }, 5000)
    setActivate(true)
  }

  return (
    <div className="container">
      <Background>
        <Router>
          {loading ? (
            <Loading
              onClick={websiteStart}
              activate={activate}
              logoLoading={logoLoading}
              timer={LOADER_TIMER}
            />
          ) : (
            <>
              <Socials />
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/events" element={<EventPage />} />
              </Routes>
            </>
          )}
        </Router>
      </Background>
    </div>
  )
}

export default App
