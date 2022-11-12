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
  const LOADER_TIMER = 5000
  const [activate, setActivate] = useState(false)

  const websiteStart = () => {
    setTimeout(() => {
      setLoading(false)
    }, LOADER_TIMER)

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
