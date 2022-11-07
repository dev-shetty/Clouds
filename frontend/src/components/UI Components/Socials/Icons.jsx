import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"
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
      <li>
        <FaInstagram size={size} />
      </li>
      <li>
        <FaFacebook size={size} />
      </li>
      <li>
        <FaTwitter size={size} />
      </li>
      <li>
        <FaYoutube size={size} />
      </li>
      <li>
        <FaEnvelope size={size} />
      </li>
    </>
  )
}

export default Icons
