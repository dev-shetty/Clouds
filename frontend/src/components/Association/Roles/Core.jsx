import Profile from "../Profile"

function Core() {
  return (
    <div>
      <div className="section divide-3">
        <Profile
          img="Profile/DrMustafaBasthikodi.jpg"
          role="President"
          name="Dr. Mustafa Basthikodi"
          socials="https://www.linkedin.com/in/dr-mustafa-basthikodi-3b644442"
          extras="HOD of Computer Science"
        />
        <Profile
          img="Profile/"
          role="Staff Co-ordinator"
          name="Srinivas P M"
          socials="https://www.linkedin.com/in/prof-srinivas-p-m-8183b6223"
        />
        <Profile
          img="Profile/SuhanKm.jpg"
          role="Vice President"
          name="Suhan K M"
          socials="https://www.linkedin.com/in/suhan-km-48253622b"
        />
      </div>
      <br />
      <div className="section divide-3">
        <Profile 
          img="Profile/SudeepNNaik.jpg" 
          role="Treasurer" 
          name="Sudeep N Naik"
          socials="http://linkedin.com/in/sudeep-naik-9819b821a"
          />
        <Profile
          img="Profile/"
          role="Joint Treasurer"
          name="Akarsh"
          socials=""
        />
        <Profile
          img="Profile/ShubhamOhdar.jpeg"
          role="Secretary"
          name="Shubham"
          socials="https://www.linkedin.com/in/shubham-ohdar-72934a1b7"
        />
      </div>
    </div>
  )
}

export default Core
