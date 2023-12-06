import Profile from "../Profile"

function Journal() {
  return (
    <div>
      <div>
        <p className="sub-title">Journal Secretary</p>
        <div className="section divide-2">
          <Profile 
            img="Profile/ShreyaSudhakaran.jpeg" 
            name="Shreya Sudhakaran" 
            socials=""
          />
          <Profile 
            img="Profile/SoujanyaRao.jpg" 
            name="Soujanya Rao" 
            role="Joint Journal Secretary"
            socials="https://www.linkedin.com/in/soujanya-rao-3b5150229"
          />
        </div>
      </div>
    </div>
  )
}

export default Journal
