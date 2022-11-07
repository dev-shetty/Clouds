import { Link } from "react-router-dom"
import Icons from "../Socials/Icons"
import Socials from "../Socials/Socials"
import styles from "./Navbar.module.css"

function Navbar() {
  return (
    <nav className={styles["main-nav"]}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
