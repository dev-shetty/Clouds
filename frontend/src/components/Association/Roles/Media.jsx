import Profile from "../Profile"

function Media() {
  return (
    <div>
      <div>
        <p className="sub-title">Graphics / Media</p>
        <div className="section divide-4">
          <Profile
            img="https://source.unsplash.com/random?Camera"
            name="Athul Ariga"
          />
          <Profile
            img="https://source.unsplash.com/random?Camera"
            name="Nishitha S Shetty"
          />
          <Profile
            img="https://source.unsplash.com/random?Camera"
            name="Adithya Nayak K"
          />
          <Profile
            img="https://source.unsplash.com/random?Camera"
            name="Sathwick Shetty"
          />
        </div>
      </div>
    </div>
  )
}

export default Media
