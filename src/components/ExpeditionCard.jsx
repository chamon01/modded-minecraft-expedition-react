function ExpeditionCard({ expedition }) {
  return (
    <article className="expedition-card">
      <h3>{expedition.name}</h3>
      <p><strong>Biome:</strong> {expedition.biome}</p>
      <p><strong>Status:</strong> {expedition.status}</p>
    </article>
  )
}

export default ExpeditionCard
