function FilterControls({ selectedStatus, onStatusChange }) {
  const statuses = ["All", "Completed", "Preparing", "Planned"]

  return (
    <section className="filter-section">
      <h2>Filter Expeditions</h2>

      <div className="filter-buttons">
        {statuses.map((status) => (
          <button
            key={status}
            type="button"
            className={selectedStatus === status ? "active-filter" : ""}
            onClick={() => onStatusChange(status)}
          >
            {status}
          </button>
        ))}
      </div>
    </section>
  )
}

export default FilterControls
