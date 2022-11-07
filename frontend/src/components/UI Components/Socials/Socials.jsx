import styles from "./Socials.module.css"

import Icons from "./Icons"
function Socials() {
  return (
    <nav className={styles["socials-nav"]}>
      <ul>
        <Icons size="2rem" />
      </ul>
    </nav>
  )
}

export default Socials
