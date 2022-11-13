import Profile from "../Profile"

function Core() {
  return (
    <div>
      <div className="section divide-3">
        <Profile
          img="Profile/NageshHR.jpg"
          role="President"
          name="Dr. Nagesh H R"
        />
        <Profile
          img="Profile/ShaileshShetty.JPG"
          role="Staff Co-ordinator"
          name="Shailesh Shetty S"
        />
        <Profile
          img="Profile/NishanthK.jpg"
          role="Vice President"
          name="Nishanth K"
        />
      </div>
      <div className="section divide-3 compress">
        <Profile
          img="Profile/Manoj.jpg"
          role="Secretary"
          name="Manoj Mahesh Naik"
        />
        <Profile img="Profile/Anurag.jpeg" role="Treasurer" name="Anurag N" />
        <Profile
          img="Profile/Bhupender.jpg"
          role="Joint Treasurer"
          name="Bhupender"
        />
      </div>
    </div>
  )
}

export default Core
