function Profile({ img, name, role, extras, socials }) {
  return (
    <div className="profile">
      <a href={socials} target="_blank">
        <img src={img} alt={role ? `${name} - ${role}` : name} loading="lazy" />
      </a>
      <div>
        <h3>{name}</h3>
        <p>{role}</p>
        <p>{extras}</p>
      </div>
    </div>
  )
}

export default Profile
