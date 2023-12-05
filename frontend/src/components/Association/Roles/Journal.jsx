import Profile from "../Profile"

function Journal() {
  return (
    <div>
      <div>
        <p className="sub-title">Journal Secretary</p>
        <div className="section divide-1">
          <Profile 
            img="Profile/" 
            name="Shreya Sudhakaran" 
            socials=""
          />
        </div>
      </div>
    </div>
  )
}

export default Journal
