import Profile from "../Profile"

function Developer() {
  return (
    <div>
      <div>
        <p className="sub-title">Web Developers</p>
        <div className="section divide-3">
          <Profile
            img="https://source.unsplash.com/random?coding"
            name="Sohan"
          />
          <Profile
            img="https://source.unsplash.com/random?coding"
            name="Sohan"
          />
          <Profile
            img="https://source.unsplash.com/random?coding"
            name="Sohan"
          />
        </div>
      </div>
    </div>
  )
}

export default Developer
