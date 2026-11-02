import { Link } from "react-router-dom"

function ExpeditionCard({ expedition }) {
  return (
    <article className="expedition-card">
      <h3>
        <Link to={`/expeditions/${expedition.id}`}>
          {expedition.name}
        </Link>
      </h3>

      <p><strong>Biome:</strong> {expedition.biome}</p>
      <p><strong>Status:</strong> {expedition.status}</p>

      <Link
        className="details-link"
        to={`/expeditions/${expedition.id}`}
      >
        View expedition details
      </Link>
    </article>
  )
}

export default ExpeditionCard
