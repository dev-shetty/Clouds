import { useNavigate } from "react-router-dom"
import "./Event.css"
function Event({ item }) {
  const navigate = useNavigate()
  return (
    <div className="event">
      <div className="event-image-wrapper">
        <img src={item.img} alt={item.name} draggable />
      </div>
      <div className="event-wrapper">
        <h2>{item.title}</h2>
        <p>
          {item.description} <a href={item.link}>{item.linkDescription}</a>
        </p>
        {/* <p className="extras" onClick={() => navigate("/sinchana")}>
          {item.extra}
        </p> */}
        <div className="event-timing">
          <p>{item.time}</p>
          <p>{item.venue}</p>
        </div>
      </div>
    </div>
  )
}

export default Event
