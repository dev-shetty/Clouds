import Profile from "../Profile"

function Sports() {
  return (
    <div>
      <div>
        <p className="sub-title">Sports Secretary</p>
        <div className="section divide-2">
          <Profile 
            img="Profile/ShyamsundarSingh.jpg" 
            name="Shyamsundar Singh" 
            socials="https://www.linkedin.com/in/shyamsundar-singh-6616a0222"
          />
          <Profile
            img="Profile/MahammadZahir.jpeg"
            name="Mahammad Zahir"
            role="Joint Sports Secretary"
            socials="https://www.linkedin.com/in/mahammad-zahir-99b988206"
          />
        </div>
      </div>
    </div>
  )
}

export default Sports
