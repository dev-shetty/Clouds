import Profile from "../Profile"

function Technical() {
  return (
    <div>
      <div>
        <p className="sub-title">Technical Secretary</p>
        <div className="section divide-2">
          <Profile
            img="https://source.unsplash.com/random?laptop"
            name="Abhishek Pai"
          />
          <Profile
            img="https://source.unsplash.com/random?laptop"
            name="Abhishek Pai"
          />
        </div>
        <p className="sub-title">Joint Technical Secretary</p>
        <div className="section divide-4">
          <Profile
            img="https://source.unsplash.com/random?laptop"
            name="Nishant"
          />
          <Profile
            img="https://source.unsplash.com/random?laptop"
            name="Nishant"
          />
          <Profile
            img="https://source.unsplash.com/random?laptop"
            name="Nishant"
          />
          <Profile
            img="https://source.unsplash.com/random?laptop"
            name="Nishant"
          />
        </div>
      </div>
    </div>
  )
}

export default Technical
