import "./App.css"
import { expeditionData, countCompleted } from "./expeditionData"

function App() {
  const completedCount = countCompleted(expeditionData)

  return (
    <main className="page">
      <header className="hero">
        <p className="tag">Modded Minecraft Expedition Log</p>
        <h1>Expedition Command Center</h1>
        <p className="description">
          A React-based expedition tracker for planning routes, recording locations,
          and keeping track of exploration progress in a modded Minecraft world.
        </p>
      </header>

      <section className="summary-card">
        <h2>Expedition Summary</h2>
        <p>Completed expeditions: <strong>{completedCount}</strong></p>
      </section>

      <section className="expedition-grid">
        {expeditionData.map((expedition) => (
          <article className="expedition-card" key={expedition.name}>
            <h3>{expedition.name}</h3>
            <p><strong>Biome:</strong> {expedition.biome}</p>
            <p><strong>Status:</strong> {expedition.status}</p>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App
