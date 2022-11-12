import { useState } from "react"
import "./Loading.css"

function Loading({ onClick, activate, timer }) {
  const [count, setCount] = useState(timer / 1000)
  if (activate) {
    setTimeout(() => {
      setCount(() => count - 1)
    }, 1000)
  }
  return (
    <div id="loader">
      {activate ? (
        <div className="loader-content">
          <h1>Clouds Initializing...</h1>
          <p>{count}</p>
        </div>
      ) : (
        ""
      )}
      {activate && <span class="loader"></span>}
      {!activate && (
        <button onClick={onClick} className="activate-btn">
          Initialize Clouds
        </button>
      )}
    </div>
  )
}

export default Loading
