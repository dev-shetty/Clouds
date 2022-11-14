import Profile from "../Profile"

function Journal() {
  return (
    <div>
      <div>
        <p className="sub-title">Journal Secretary</p>
        <div className="section divide-2">
          <Profile img="Profile/Sucheta.jpg" name="Sucheta S Shanbhag" />
          <Profile img="Profile/VinolDSouza.jpg" name="Vinol Chris D Souza" />
        </div>
      </div>
      <div>
        <p className="sub-title">Joint Journal Secretary</p>
        <div className="section divide-2">
          <Profile img="Profile/Amritha.jpg" name="Amritha" />
          <Profile img="Profile/LakshmiAkshayaT.jpg" name="Lakshmi Akshaya T" />
        </div>
      </div>
    </div>
  )
}

export default Journal
