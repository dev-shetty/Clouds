import Profile from "../Profile"

function Cultural() {
  return (
    <div>
      <div>
        <p className="sub-title">Cultural Secretary</p>
        <div className="section divide-4">
          <Profile
            img="https://source.unsplash.com/random?india"
            name="Priyanka R Kunte"
          />
          <Profile
            img="https://source.unsplash.com/random?india"
            name="K R Sinchana"
          />
          <Profile
            img="https://source.unsplash.com/random?india"
            name="Shrest"
          />
          <Profile
            img="https://source.unsplash.com/random?india"
            name="Deeksha P K"
          />
        </div>
        <p className="sub-title">Joint Cultural Secretary</p>
        <div className="section divide-2">
          <Profile
            img="https://source.unsplash.com/random?india"
            name="Anushree Rai N"
          />
          <Profile
            img="https://source.unsplash.com/random?india"
            name="Punya"
          />
        </div>
      </div>
    </div>
  )
}

export default Cultural
