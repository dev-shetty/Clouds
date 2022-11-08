import Event from "../components/Events/Event"
import data from "../components/Events/events"
function EventPage() {
  const event = data.map((item) => <Event key={item.id} item={item} />)
  return <div>{event}</div>
}

export default EventPage
