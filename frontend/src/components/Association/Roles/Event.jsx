import Profile from "../Profile"

function Event() {
  return (
    <div>
      <div>
        <p className="sub-title">Event Co-ordinators</p>
        <div className="section divide-4">
          <Profile
            img="Profile/AbhishekPaiP.jpg"
            name="Abhishek Pai P"
            socials="https://www.linkedin.com/in/abhishek-pai-b808381b3"
          />
          <Profile img="Profile/Ashwin.jpg" name="Ashwin K P" />
          <Profile
            img="Profile/Sohan.JPG"
            name="Sohan Bangera"
            socials="https://www.linkedin.com/in/sohan-bangera-b324461b1/"
          />
          <Profile
            img="Profile/Dharithri.png"
            name="Dharithri Rai B"
            socials="https://www.linkedin.com/in/dharithri-rai-b-577790191/"
          />
        </div>
        <p className="sub-title">Joint Event Co-ordinators</p>
        <div className="section divide-4">
          <Profile img="Profile/Shreya.jpg" name="Shreya K" />
          <Profile
            img="Profile/Sudeepnn.jpg"
            name="Sudeep N Naik"
            socials="https://www.linkedin.com/in/sudeep-naik-9819b821a/"
          />
          <Profile
            img="Profile/Divesh.jpg"
            name="Divesh S"
            socials="https://www.instagram.com/subodhik"
          />
          <Profile img="Profile/Amulya.jpg" name="Amulya" />
        </div>
      </div>
    </div>
  )
}

export default Event
