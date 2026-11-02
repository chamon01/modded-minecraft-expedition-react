import { useState } from "react"
import { expeditionData, countCompleted } from "../expeditionData"
import FilterControls from "../components/FilterControls"
import ExpeditionList from "../components/ExpeditionList"

function ExpeditionsView() {
  const [selectedStatus, setSelectedStatus] = useState("All")

  const completedCount = countCompleted(expeditionData)

  const visibleExpeditions =
    selectedStatus === "All"
      ? expeditionData
      : expeditionData.filter(
          (expedition) => expedition.status === selectedStatus
        )

  const visibleCount = visibleExpeditions.length

  function handleStatusChange(status) {
    setSelectedStatus(status)
  }

  return (
    <section className="view-section">
      <h2>Expeditions</h2>

      <div className="summary-card">
        <p>
          Completed expeditions: <strong>{completedCount}</strong>
        </p>
        <p>
          Expeditions shown: <strong>{visibleCount}</strong>
        </p>
      </div>

      <FilterControls
        selectedStatus={selectedStatus}
        onStatusChange={handleStatusChange}
      />

      <ExpeditionList expeditions={visibleExpeditions} />
    </section>
  )
}

export default ExpeditionsView
