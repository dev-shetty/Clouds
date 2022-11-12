import Profile from "../Profile"

function Event() {
  return (
    <div>
      <div>
        <p className="sub-title">Event Co-ordinators</p>
        <div className="section divide-4">
          <Profile
            img="https://source.unsplash.com/random?river"
            name="Abhishek Pai P"
          />
          <Profile
            img="https://source.unsplash.com/random?river"
            name="Ashwin K P"
          />
          <Profile
            img="https://source.unsplash.com/random?river"
            name="Sohan Bangera"
          />
          <Profile
            img="https://source.unsplash.com/random?river"
            name="Dharithri Rai B"
          />
        </div>
        <p className="sub-title">Joint Event Co-ordinators</p>
        <div className="section divide-4">
          <Profile
            img="https://source.unsplash.com/random?river"
            name="Shreya K"
          />
          <Profile
            img="https://source.unsplash.com/random?river"
            name="Sudeep N Naik"
          />
          <Profile
            img="https://source.unsplash.com/random?river"
            name="Divesh"
          />
          <Profile
            img="https://source.unsplash.com/random?river"
            name="Amulya"
          />
        </div>
      </div>
    </div>
  )
}

export default Event
