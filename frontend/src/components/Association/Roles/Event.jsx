import Profile from "../Profile"

function Event() {
  return (
    <div>
      <div>
        <p className="sub-title">Event Co-ordinators</p>
        <div className="section divide-4">
          <Profile img="NoProfile.png" name="Abhishek Pai P" />
          <Profile img="Profile/Ashwin.jpg" name="Ashwin K P" />
          <Profile img="Profile/Sohan.JPG" name="Sohan Bangera" />
          <Profile img="Profile/Dharithri.png" name="Dharithri Rai B" />
        </div>
        <p className="sub-title">Joint Event Co-ordinators</p>
        <div className="section divide-4">
          <Profile img="Profile/Shreya.jpg" name="Shreya K" />
          <Profile img="Profile/Sudeepnn.jpg" name="Sudeep N Naik" />
          <Profile img="Profile/Divesh.jpg" name="Divesh" />
          <Profile img="Profile/Amulya.jpg" name="Amulya" />
        </div>
      </div>
    </div>
  )
}

export default Event
