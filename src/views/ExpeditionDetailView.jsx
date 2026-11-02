import { Link, useParams } from "react-router-dom"
import { expeditionData } from "../expeditionData"

function ExpeditionDetailView() {
  const { id } = useParams()

  const expedition = expeditionData.find(
    (item) => item.id === Number(id)
  )

  if (!expedition) {
    return (
      <section className="view-section not-found">
        <h2>Expedition Not Found</h2>
        <p>
          There is no expedition with the ID {id}.
        </p>

        <Link className="primary-link" to="/expeditions">
          Return to expeditions
        </Link>
      </section>
    )
  }

  return (
    <section className="view-section">
      <p className="detail-label">Expedition Details</p>

      <div className="detail-card">
        <h2>{expedition.name}</h2>

        <p>
          <strong>Expedition ID:</strong> {expedition.id}
        </p>

        <p>
          <strong>Biome:</strong> {expedition.biome}
        </p>

        <p>
          <strong>Status:</strong> {expedition.status}
        </p>
      </div>

      <Link className="primary-link" to="/expeditions">
        Back to expeditions
      </Link>
    </section>
  )
}

export default ExpeditionDetailView
