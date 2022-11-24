import Card from "../components/Sinchana/Card"
import data from "../components/Sinchana/sinchanaEvents"
import "../components/Sinchana/Sinchana.css"
function SinchanaPage() {
  const events = data.map((item) => <Card key={item.id} event={item} />)
  return <div className="sinchana-wrapper">{events}</div>
}

export default SinchanaPage
