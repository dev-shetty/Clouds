import Profile from "../Profile"

function Cultural() {
  return (
    <div>
      <div>
        <p className="sub-title">Cultural Secretary</p>
        <div className="section divide-4">
          <Profile
            img="https://source.unsplash.com/random?india"
            name="Aashay"
          />
          <Profile
            img="https://source.unsplash.com/random?india"
            name="Aashay"
          />
          <Profile
            img="https://source.unsplash.com/random?india"
            name="Aashay"
          />
          <Profile
            img="https://source.unsplash.com/random?india"
            name="Aashay"
          />
        </div>
        <p className="sub-title">Joint Cultural Secretary</p>
        <div className="section divide-2">
          <Profile
            img="https://source.unsplash.com/random?india"
            name="Athul"
          />
          <Profile
            img="https://source.unsplash.com/random?india"
            name="Athul"
          />
        </div>
      </div>
    </div>
  )
}

export default Cultural
