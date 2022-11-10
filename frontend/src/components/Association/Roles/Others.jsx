import Profile from "../Profile"

// It has Placement Co-ordinator and Documentation / Marketing
function Others() {
  return (
    <div>
      <div>
        <p className="sub-title">Placement and Marketing</p>
        <div className="section divide-2">
          <Profile
            img="https://source.unsplash.com/random?market"
            name="Abhishek 2.0"
            role="Placement Co-ordinator"
          />
          <Profile
            img="https://source.unsplash.com/random?market"
            name="Abhishek 2.0"
            role="Documentation / Marketing"
          />
        </div>
      </div>
    </div>
  )
}

export default Others
