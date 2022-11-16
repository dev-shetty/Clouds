import Profile from "../Profile"

function Technical() {
  return (
    <div>
      <div>
        <p className="sub-title">Technical Secretary</p>
        <div className="section divide-2">
          <Profile
            img="Profile/Ashay.jpeg"
            name="Ashay H Sooda"
            socials="https://www.linkedin.com/in/ashay-sooda-7316031b5/"
          />
          <Profile img="Profile/Prakyath.jpeg" name="Prakyath H N" />
        </div>
        <p className="sub-title">Joint Technical Secretary</p>
        <div className="section divide-4">
          <Profile img="Profile/PratheekshaS.png" name="Pratheeksha S" />
          <Profile img="Profile/AshwinPB.jpg" name="Ashwin P B" />
          <Profile img="Profile/Hamshini.jpg  " name="Hamshini Shetty" />
          <Profile img="Profile/Moksha.jpg" name="Moksha K" />
        </div>
      </div>
    </div>
  )
}

export default Technical
