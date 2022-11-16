import { useState } from "react"
import Logo from "./Logo"
import "./Loading.css"
import Background from "../UI Components/Background/Background"

function Loading({ onClick, activate, timer, logoLoading }) {
  console.log(logoLoading)
  const [count, setCount] = useState(5)
  if (activate) {
    setTimeout(() => {
      setCount(() => count - 1)
    }, 1000)
  }
  return (
    <>
      {logoLoading ? (
        <Logo />
      ) : (
        <Background>
          <div id="loader">
            {activate ? (
              <div className="loader-content">
                <h1>Clouds Initializing...</h1>
                <p>{count}</p>
              </div>
            ) : (
              ""
            )}
            {activate && <span className="loader"></span>}
            {!activate && (
              <button onClick={onClick} className="activate-btn">
                Initialize Clouds
              </button>
            )}
          </div>
        </Background>
      )}
    </>
  )
}

export default Loading
