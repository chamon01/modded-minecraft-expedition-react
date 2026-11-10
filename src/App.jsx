import { useCallback, useEffect, useState } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import "./App.css"

import Header from "./components/Header"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import ProtectedRoute from "./components/ProtectedRoute"

import HomeView from "./views/HomeView"
import ExpeditionsView from "./views/ExpeditionsView"
import ExpeditionDetailView from "./views/ExpeditionDetailView"
import NotFoundView from "./views/NotFoundView"
import LoginView from "./views/LoginView"
import DashboardView from "./views/DashboardView"

function App() {
  const [user, setUser] = useState(null)
  const [checking, setChecking] = useState(true)
  const [notice, setNotice] = useState("")

  useEffect(() => {
    async function restoreSession() {
      try {
        const response = await fetch("/api/profile", {
          credentials: "include",
        })

        if (response.status === 401) {
          setUser(null)
          return
        }

        if (!response.ok) {
          throw new Error("Session check failed.")
        }

        const data = await response.json()
        setUser(data.user)
      } catch {
        setNotice("Could not reach the authentication backend.")
      } finally {
        setChecking(false)
      }
    }

    restoreSession()
  }, [])

  const handleUnauthorized = useCallback(() => {
    setUser(null)
    setNotice("401 - Your session is no longer valid. Please log in.")
  }, [])

  function handleLogin(loggedInUser) {
    setUser(loggedInUser)
    setNotice("")
  }

  async function handleLogout() {
    try {
      const response = await fetch("/api/logout", {
        method: "POST",
        credentials: "include",
      })

      if (response.status === 401) {
        handleUnauthorized()
        return
      }

      if (!response.ok) {
        throw new Error("Logout failed.")
      }

      setUser(null)
      setNotice("You have been logged out.")
    } catch {
      setNotice("Could not complete logout. Please try again.")
    }
  }

  return (
    <main className="page">
      <Header />

      <Navigation user={user} onLogout={handleLogout} />

      {notice && (
        <p role="status" className="auth-warning">{notice}</p>
      )}

      <Routes>
        <Route path="/" element={<HomeView />} />

        <Route
          path="/expeditions"
          element={<ExpeditionsView />}
        />

        <Route
          path="/expeditions/:id"
          element={<ExpeditionDetailView />}
        />

        <Route
          path="/login"
          element={
            checking ? (
              <p>Checking your login...</p>
            ) : user ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <LoginView onLogin={handleLogin} />
            )
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute user={user} checking={checking}>
              <DashboardView onUnauthorized={handleUnauthorized} />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFoundView />} />
      </Routes>

      <Footer />
    </main>
  )
}

export default App
