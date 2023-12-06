import Profile from "../Profile"

function Developer() {
  return (
    <div>
      <div>
        <p className="sub-title">Web Developers</p>
        <div className="section divide-3">
          <Profile
            img="Profile/DeveeshShetty.jpg"
            name="Deveesh Shetty"
            socials="https://www.linkedin.com/in/deveesh-shetty-908539214"
          />
          <Profile
            img="Profile/Tejas.jpg"
            name="Tejas G K"
            socials="https://www.linkedin.com/in/tejas-gk"
          />
          <Profile
            img="Profile/Rohan.jpeg"
            name="Rohan"
            socials="https://www.linkedin.com/in/rohan-44aa02228"
          />
        </div>
      </div>
    </div>
  )
}

export default Developer
