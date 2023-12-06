import Profile from "../Profile"

function Event() {
  return (
    <div>
      <div>
        <p className="sub-title">Event Co-ordinators</p>
        <div className="section divide-3">
          <Profile
            img="Profile/BlensonDSouza.jpeg"
            name="Blenson DSouza"
            socials="https://www.linkedin.com/in/blenson-d-souza-7879551ba"
          />
          <Profile 
            img="Profile/DevikaShetty.jpg" 
            name="Devika Shetty" 
            socials="https://www.linkedin.com/in/devika-shetty-a31b50212"
          />
          <Profile
            img="Profile/GoswamyDatta.jpg"
            name="K Goswamy Datta"
            socials="https://www.linkedin.com/in/k-goswamy-datta-063992225"
          />
        </div>
        <p className="sub-title">Joint Event Co-ordinators</p>
        <div className="section divide-3">
          <Profile
            img="Profile/PratheekshaS.jpg"
            name="Pratheeksha S"
            socials="https://www.linkedin.com/in/pratheeksha-s-bangera-8a4a1a22a"
          />
          <Profile 
            img="Profile/MokshaK.jpeg" 
            name="Moksha" 
            socials="https://www.linkedin.com/in/moksha-k"
          />
          <Profile
            img="Profile/HamshiniShetty.jpg"
            name="Hamshini S Shetty"
            socials="https://www.linkedin.com/in/hamshini-shetty"
          />
        </div>
      </div>
    </div>
  )
}

export default Event
