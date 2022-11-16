import Profile from "../Profile"

function Media() {
  return (
    <div>
      <div>
        <p className="sub-title">Graphics / Media</p>
        <div className="section divide-4">
          <Profile
            img="Profile/Athul.jpg"
            name="Athul Ariga"
            socials="https://www.linkedin.com/in/athul-ariga-b4277a191/"
          />
          <Profile img="Profile/NikshithaShetty.jpg" name="Nishitha S Shetty" />
          <Profile
            img="Profile/Adithya.JPG"
            name="Adithya Nayak K"
            socials="https://www.linkedin.com/in/adithya-nayak-k-7046a422a/"
          />
          <Profile img="Profile/Sathwick.jpg" name="Sathwick Shetty" />
        </div>
      </div>
    </div>
  )
}

export default Media
