import Profile from "../Profile"

function Media() {
  return (
    <div>
      <div>
        <p className="sub-title">Graphics / Media</p>
        <div className="section divide-4">
          <Profile
            img="Profile/sathwikshetty.jpg"
            name="Sathwik Shetty N"
            socials="http://www.linkedin.com/in/sathwikshettyn"
          />
          <Profile
            img="Profile/Divesh.jpg"
            name="Divesh"
            socials=""
          />
          <Profile
            img="Profile/"
            name="Adithya"
            socials=""
          />
          <Profile 
            img="Profile/" 
            name="Adithya" 
            socials=""
          />
        </div>
      </div>
    </div>
  )
}

export default Media
