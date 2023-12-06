import Profile from "../Profile"

function Technical() {
  return (
    <div>
      <div>
        <p className="sub-title">Technical Secretary</p>
        <div className="section divide-3">
          <Profile
            img="Profile/SANNIDHIBHAT .jpeg"
            name="Sannidhi Bhat"
            socials="https://www.linkedin.com/in/sannidhi-bhat-4b7852202"
          />
          <Profile 
            img="Profile/AnishMendon.jpg" 
            name="Anish D Mendon"
            socials="https://www.linkedin.com/in/anish-mendon-913546202" 
          />
          <Profile
            img="Profile/Amulya.jpg"
            name="Amulya Nayak"
            socials=""
          />
        </div>
        <p className="sub-title">Joint Technical Secretary</p>
        <div className="section divide-2">
          <Profile 
            img="Profile/" 
            name="Abhijnya" 
            socials=""
          />
          <Profile 
            img="Profile/AnanyaPk.jpg/" 
            name="Ananya P K" 
            socials="https://www.linkedin.com/in/ananya-pk-52409522b"
          />
        </div>
      </div>
    </div>
  )
}

export default Technical
