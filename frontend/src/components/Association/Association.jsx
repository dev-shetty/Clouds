import Core from "./Roles/Core"
import Coordinator from "./Roles/Coordinator"
import Cultural from "./Roles/Cultural"
import Technical from "./Roles/Technical"
import Developer from "./Roles/Developer"
import Sports from "./Roles/Sports"
import Journal from "./Roles/Journal"
import Media from "./Roles/Media"
import "./Association.css"
import Others from "./Roles/Others"

function Association() {
  return (
    <div id="association">
      <h1 className="title">Clouds Association</h1>
      <main className="clouds-association">
        <Core />
        <Coordinator />
        <Cultural />
        <Technical />
        <Developer />
        <Sports />
        <Journal />
        <Media />
        <Others />
        {/* Others has Placement Co-ordinator and Documentation / Marketing */}
      </main>
    </div>
  )
}

export default Association
