import ExpeditionCard from "./ExpeditionCard"

function ExpeditionList({ expeditions }) {
  if (expeditions.length === 0) {
    return <p className="empty-message">No expeditions match this filter.</p>
  }

  return (
    <section className="expedition-grid">
      {expeditions.map((expedition) => (
        <ExpeditionCard
          key={expedition.id}
          expedition={expedition}
        />
      ))}
    </section>
  )
}

export default ExpeditionList
