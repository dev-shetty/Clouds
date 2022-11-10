function Profile({ img, name, role }) {
  return (
    <div className="profile">
      <img src={img} alt={`${name} - ${role}`} />
      <div>
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
    </div>
  )
}

export default Profile
