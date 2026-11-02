import { Link } from "react-router-dom"
import { expeditionData, countCompleted } from "../expeditionData"

function HomeView() {
  const completedCount = countCompleted(expeditionData)

  return (
    <section className="view-section">
      <h2>Welcome to the Expedition Command Center</h2>

      <p>
        Use this application to review planned expeditions,
        their locations, and current progress.
      </p>

      <div className="summary-card">
        <h3>Current Expedition Log</h3>
        <p>
          Total expeditions: <strong>{expeditionData.length}</strong>
        </p>
        <p>
          Completed expeditions: <strong>{completedCount}</strong>
        </p>
      </div>

      <Link className="primary-link" to="/expeditions">
        View all expeditions
      </Link>
    </section>
  )
}

export default HomeView
