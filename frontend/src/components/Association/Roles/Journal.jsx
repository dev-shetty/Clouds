import Profile from "../Profile"

function Journal() {
  return (
    <div>
      <div>
        <p className="sub-title">Journal Secretary</p>
        <div className="section divide-2">
          <Profile
            img="https://source.unsplash.com/random?book"
            name="Adithya"
          />
          <Profile
            img="https://source.unsplash.com/random?book"
            name="Adithya"
          />
        </div>
      </div>
      <div>
        <p className="sub-title">Joint Journal Secretary</p>
        <div className="section divide-2">
          <Profile
            img="https://source.unsplash.com/random?book"
            name="Adithya"
          />
          <Profile
            img="https://source.unsplash.com/random?book"
            name="Adithya"
          />
        </div>
      </div>
    </div>
  )
}

export default Journal
