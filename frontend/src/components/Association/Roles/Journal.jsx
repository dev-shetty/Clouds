import Profile from "../Profile"

function Journal() {
  return (
    <div>
      <div>
        <p className="sub-title">Journal Secretary</p>
        <div className="section divide-2">
          <Profile
            img="https://source.unsplash.com/random?book"
            name="Sucheta S Shanbhag"
          />
          <Profile
            img="https://source.unsplash.com/random?book"
            name="Vinol Chris D Souza"
          />
        </div>
      </div>
      <div>
        <p className="sub-title">Joint Journal Secretary</p>
        <div className="section divide-2">
          <Profile
            img="https://source.unsplash.com/random?book"
            name="Amrutha"
          />
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
