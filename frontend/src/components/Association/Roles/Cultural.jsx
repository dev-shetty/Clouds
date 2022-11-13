import Profile from "../Profile"

function Cultural() {
  return (
    <div>
      <div>
        <p className="sub-title">Cultural Secretary</p>
        <div className="section divide-4">
          <Profile img="NoProfile.png" name="Priyanka R Kunte" />
          <Profile img="Profile/Sinchana.jpg" name="K R Sinchana" />
          <Profile img="NoProfile.png" name="Shrest" />
          <Profile img="Profile/DeekshaPK.jpeg" name="Deeksha P K" />
        </div>
        <p className="sub-title">Joint Cultural Secretary</p>
        <div className="section divide-2">
          <Profile img="NoProfile.png" name="Anushree Rai N" />
          <Profile img="NoProfile.png" name="Punya" />
        </div>
      </div>
    </div>
  )
}

export default Cultural
