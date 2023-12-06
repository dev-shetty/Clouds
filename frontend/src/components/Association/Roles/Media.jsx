import Profile from "../Profile"

function Media() {
  return (
    <div>
      <div>
        <p className="sub-title">Graphics / Media</p>
        <div className="section divide-3">
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
            img="Profile/SudeepGNaik.jpg"
            name="Sudeep G Naik"
            socials="https://www.linkedin.com/in/sudeep-naik-328495145"
          />
        </div>
      </div>
    </div>
  )
}

export default Media
