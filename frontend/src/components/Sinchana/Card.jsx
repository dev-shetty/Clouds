function Card({ event }) {
  return (
    <div className="sinchana">
      <h2>{event.name}</h2>
      {/* <p className="description">{event.description}</p> */}
      <div className="event-timing">
        <p>Time: {event.time}</p>
        {event.venue && <p>Venue: {event.venue}</p>}
      </div>
    </div>
  )
}

export default Card
