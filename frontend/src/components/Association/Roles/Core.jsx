import Profile from "../Profile"

function Core() {
  return (
    <div>
      <div className="section divide-3">
        <Profile
          img="https://source.unsplash.com/random?mountain"
          role="President"
          name="Dr. Nagesh H R"
        />
        <Profile
          img="https://source.unsplash.com/random?mountain"
          role="Staff Co-ordinator"
          name="Shailesh Shetty S"
        />
        <Profile
          img="https://source.unsplash.com/random?mountain"
          role="Vice President"
          name="Nishanth K"
        />
      </div>
      <div className="section divide-3 compress">
        <Profile
          img="https://source.unsplash.com/random?mountain"
          role="Secretary"
          name="Manoj Mahesh Naik"
        />
        <Profile
          img="https://source.unsplash.com/random?mountain"
          role="Treasurer"
          name="Anurag N"
        />
        <Profile
          img="https://source.unsplash.com/random?mountain"
          role="Joint Treasurer"
          name="Bhupendra"
        />
      </div>
    </div>
  )
}

export default Core
