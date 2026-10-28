import { useState } from "react"
import "./App.css"
import { expeditionData, countCompleted } from "./expeditionData"
import Header from "./components/Header"
import FilterControls from "./components/FilterControls"
import ExpeditionList from "./components/ExpeditionList"
import Footer from "./components/Footer"

function App() {
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
    <main className="page">
      <Header />

      <section className="summary-card">
        <h2>Expedition Summary</h2>
        <p>
          Completed expeditions: <strong>{completedCount}</strong>
        </p>
        <p>
          Expeditions shown: <strong>{visibleCount}</strong>
        </p>
      </section>

      <FilterControls
        selectedStatus={selectedStatus}
        onStatusChange={handleStatusChange}
      />

      <ExpeditionList expeditions={visibleExpeditions} />

      <Footer />
    </main>
  )
}

export default App
