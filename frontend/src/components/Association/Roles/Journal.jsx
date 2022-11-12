import Profile from "../Profile"

function Journal() {
  return (
    <div>
      <div>
        <p className="sub-title">Journal Secretary</p>
        <div className="section divide-2">
          <Profile img="Profile/Sucheta.jpg" name="Sucheta S Shanbhag" />
          <Profile
            img="https://source.unsplash.com/random?book"
            name="Vinol Chris D Souza"
          />
        </div>
      </div>
      <div>
        <p className="sub-title">Joint Journal Secretary</p>
        <div className="section divide-2">
          <Profile img="Profile/Amritha.jpg" name="Amritha" />
          <Profile
            img="https://source.unsplash.com/random?book"
            name="Lakshmi Akshaya T"
          />
        </div>
      </div>
    </div>
  )
}

export default Journal
