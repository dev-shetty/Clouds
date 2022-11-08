import "./Event.css"
function Event({ item }) {
  return (
    <div className="event">
      <div className="event-image-wrapper">
        <img src={item.img} alt={item.name} draggable />
      </div>
      <div className="event-wrapper">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <div className="event-timing">
          <p>{item.time}</p>
          <p>{item.venue}</p>
        </div>
      </div>
    </div>
  )
}

export default Event
