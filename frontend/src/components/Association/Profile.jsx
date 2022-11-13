function Profile({ img, name, role, extras }) {
  return (
    <div className="profile">
      <img src={img} alt={role ? `${name} - ${role}` : name} loading="lazy" />
      <div>
        <h3>{name}</h3>
        <p>{extras}</p>
        <p>{role}</p>
      </div>
    </div>
  )
}

export default Profile
