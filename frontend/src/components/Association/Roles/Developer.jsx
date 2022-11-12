import Profile from "../Profile"

function Developer() {
  return (
    <div>
      <div>
        <p className="sub-title">Web Developers</p>
        <div className="section divide-3">
          <Profile
            img="https://source.unsplash.com/random?coding"
            name="Deveesh C Shetty"
          />
          <Profile img="Profile/Tejas.jpg" name="Tejas G K" />
          <Profile
            img="https://source.unsplash.com/random?coding"
            name="Rohan"
          />
        </div>
      </div>
    </div>
  )
}

export default Developer
