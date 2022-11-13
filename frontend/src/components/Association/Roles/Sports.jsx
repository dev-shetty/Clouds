import Profile from "../Profile"

function Sports() {
  return (
    <div>
      <div>
        <p className="sub-title">Sports Secretary</p>
        <div className="section divide-2">
          <Profile img="NoProfile.png" name="Aman" />
          <Profile
            img="Profile/Zahir.jpg"
            name="Zahir"
            role="Joint Sports Secretary"
          />
        </div>
      </div>
    </div>
  )
}

export default Sports
