import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"
import styles from "./Socials.module.css"

function Icons({ size }) {
  // if color needed then
  /**
   *  Instagram - #F600B2
   *  Facebook - #0371E2
   *  Twitter - #1DA1F2
   *  Youtube - #FE0000
   */
  return (
    <>
      <li className={styles["icon"]}>
        <a
          href="https://instagram.com/clouds_scem?igshid=ZmRlMzRkMDU="
          target="_blank"
        >
          <FaInstagram size={size} />
        </a>
      </li>
      {/* <li>
        <FaFacebook size={size} />
      </li> */}
      {/* <li>
        <FaTwitter size={size} />
      </li> */}
      {/* <li>
        <FaYoutube size={size} className="youtube" />
      </li> */}
      <li>
        <a
          href="https://www.linkedin.com/company/department-of-computer-science-engineering"
          target="_blank"
        >
          <FaLinkedin size={size} className={styles["icon"]} />
        </a>
      </li>
      {/* <li>
        <FaEnvelope size={size} className={styles["icon"]} />
      </li> */}
    </>
  )
}

export default Icons
