import video from "../../../assets/Background.mp4"
import "./Background.css"

function Background({ children }) {
  return (
    <div>
      <video autoPlay muted loop id="background-video">
        <source src={video} type="video/mp4" />
      </video>
      {children}
    </div>
  )
}

export default Background
