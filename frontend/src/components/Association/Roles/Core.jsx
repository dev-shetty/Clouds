import Profile from "../Profile"

function Core() {
  return (
    <div>
      <div className="section divide-3">
        <Profile
          img="https://source.unsplash.com/random?mountain"
          role="President"
          name="Deveesh Shetty"
        />
        <Profile
          img="https://source.unsplash.com/random?mountain"
          role="Vice President"
          name="Deveesh Shetty"
        />
        <Profile
          img="https://source.unsplash.com/random?mountain"
          role="Staff Co-ordinator"
          name="Deveesh Shetty"
        />
      </div>
      <div className="section divide-3 compress">
        <Profile
          img="https://source.unsplash.com/random?mountain"
          role="Secretary"
          name="Deveesh Shetty"
        />
        <Profile
          img="https://source.unsplash.com/random?mountain"
          role="Treasurer"
          name="Deveesh Shetty"
        />
        <Profile
          img="https://source.unsplash.com/random?mountain"
          role="Joint Treasurer"
          name="Deveesh Shetty"
        />
      </div>
    </div>
  )
}

export default Core
