import Profile from "../Profile"

function Cultural() {
  return (
    <div>
      <div>
        <p className="sub-title">Cultural Secretary</p>
        <div className="section divide-2">
          <Profile 
            img="Profile/NurainKk.jpeg" 
            name="Nurain K K" 
            socials="https://www.linkedin.com/in/nurain-kk-4631bb207"
          />
          <Profile 
            img="Profile/ShashwathShetty.jpg" 
            name="Shashwath" 
            socials="https://www.linkedin.com/in/shashwath-shetty-004187235"
          />
        </div>
        <p className="sub-title">Joint Cultural Secretary</p>
        <div className="section divide-2">
          <Profile 
            img="Profile/AnushreeRai.jpg" 
            name="Anushree Rai N" 
            socials="https://www.linkedin.com/in/anushree-rai-n-1420812a3"
          />
          <Profile 
            img="Profile/Punya.jpg" 
            name="Punya" 
            socials="https://www.linkedin.com/in/punya-poojary-kadambar-19068b226"
          />
        </div>
      </div>
    </div>
  )
}

export default Cultural
