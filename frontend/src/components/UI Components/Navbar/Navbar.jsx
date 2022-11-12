// import { useState } from "react"
import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"

function Navbar() {
  // // If u want the notification then set useState(true) to give notification in website after updating the content in events tab
  // const [notification, setNotification] = useState(true)
  // const notificationHandler = () => {
  //   if (notification) {
  //     setNotification(false)
  //   } else {
  //     // setNotification(<true></true>)
  //   }
  // }
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
