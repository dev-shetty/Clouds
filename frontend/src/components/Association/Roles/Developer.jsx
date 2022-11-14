import Profile from "../Profile"

function Developer() {
  return (
    <div>
      <div>
        <p className="sub-title">Web Developers</p>
        <div className="section divide-3">
          <Profile
            img="Profile/Deveesh.jpeg"
            name="Deveesh C Shetty"
            socials="https://www.linkedin.com/in/deveesh-shetty-908539214/"
          />
          <Profile img="Profile/Tejas.jpg" name="Tejas G K" />
          <Profile img="Profile/Rohan.jpg" name="Rohan" />
        </div>
      </div>
    </div>
  )
}

export default Developer
