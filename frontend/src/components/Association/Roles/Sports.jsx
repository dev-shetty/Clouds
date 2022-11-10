import Profile from "../Profile"

function Sports() {
  return (
    <div>
      <div>
        <p className="sub-title">Sports Secretary</p>
        <div className="section divide-2">
          <Profile
            img="https://source.unsplash.com/random?sports"
            name="Rohan"
          />
          <Profile
            img="https://source.unsplash.com/random?sports"
            name="Rohan"
            role="Joint Sports Secretary"
          />
        </div>
      </div>
    </div>
  )
}

export default Sports
