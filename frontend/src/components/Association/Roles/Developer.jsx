import Profile from "../Profile"

function Developer() {
  return (
    <div>
      <div>
        <p className="sub-title">Web Developers</p>
        <div className="section divide-3">
          <Profile img="NoProfile.png" name="Deveesh C Shetty" />
          <Profile img="Profile/Tejas.jpg" name="Tejas G K" />
          <Profile img="NoProfile.png" name="Rohan" />
        </div>
      </div>
    </div>
  )
}

export default Developer
