import { FaArrowDown } from "react-icons/fa"
import "./Home.css"
function Landing() {
  return (
    <div id="landing">
      <div className="landing-image">
        <img src="Clouds logo.png" alt="Clouds logo" />
      </div>
      <div className="landing-content">
        {/* <h1>CLOUDS</h1> */}
        {/* <h2>Full form of CLOUDS</h2> */}
        <p>
          Clouds which stands for Computer Legends Of the Unified Department is
          a student organization of Computer Science and Engineering students at
          SCEM. It aims to enhance the academic and professional lives of its
          members. We at CLOUDS endeavor to create a healthy competitive
          environment by providing opportunities for all to benefit from it.
        </p>
      </div>
      {/* <div className="scroll-down">
        <FaArrowDown color="black" size="1.5rem" />
      </div> */}
    </div>
  )
}

export default Landing
