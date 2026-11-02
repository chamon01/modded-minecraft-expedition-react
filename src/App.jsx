import { Route, Routes } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import HomeView from "./views/HomeView"
import ExpeditionsView from "./views/ExpeditionsView"
import ExpeditionDetailView from "./views/ExpeditionDetailView"
import NotFoundView from "./views/NotFoundView"

function App() {
  return (
    <main className="page">
      <Header />
      <Navigation />

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/expeditions" element={<ExpeditionsView />} />
        <Route
          path="/expeditions/:id"
          element={<ExpeditionDetailView />}
        />
        <Route path="*" element={<NotFoundView />} />
      </Routes>

      <Footer />
    </main>
  )
}

export default App
