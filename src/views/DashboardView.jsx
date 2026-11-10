import { useEffect, useState } from "react"

function DashboardView({ onUnauthorized }) {
  const [profile, setProfile] = useState(null)
  const [error, setError] = useState("")
  const [adminResult, setAdminResult] = useState("")

  useEffect(() => {
    let active = true

    async function loadProfile() {
      try {
        const response = await fetch("/api/profile", {
          credentials: "include",
        })

        if (!active) return

        if (response.status === 401) {
          onUnauthorized()
          return
        }

        if (!response.ok) {
          throw new Error("Unable to load your profile.")
        }

        const data = await response.json()
        if (active) setProfile(data.user)
      } catch {
        if (active) setError("Could not load protected data.")
      }
    }

    loadProfile()

    return () => {
      active = false
    }
  }, [onUnauthorized])

  async function checkAdminAccess() {
    setAdminResult("")

    try {
      const response = await fetch("/api/admin", {
        credentials: "include",
      })

      if (response.status === 401) {
        onUnauthorized()
        return
      }

      if (response.status === 403) {
        setAdminResult(
          "403 Forbidden - You are logged in, but admin access is required."
        )
        return
      }

      if (!response.ok) {
        setAdminResult("The admin request failed.")
        return
      }

      const data = await response.json()
      setAdminResult(data.message)
    } catch {
      setAdminResult("Could not connect to the backend.")
    }
  }

  return (
    <section className="view-section">
      <h2>Protected Expedition Dashboard</h2>
      <p>This page requires an active login session.</p>

      <div className="detail-card">
        <h3>Authenticated Backend Response</h3>

        {error && <p role="alert">{error}</p>}

        {profile ? (
          <>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Role:</strong> {profile.role}</p>
            <p className="auth-success">
              200 OK - Protected profile loaded successfully.
            </p>
          </>
        ) : (
          !error && <p>Loading protected data...</p>
        )}
      </div>

      <div className="detail-card">
        <h3>Authorization Test</h3>
        <p>
          Check whether your account is permitted to access
          the backend's admin-only endpoint.
        </p>

        <button type="button" onClick={checkAdminAccess}>
          Test Admin Access
        </button>

        {adminResult && (
          <p role="status" className="auth-warning">
            {adminResult}
          </p>
        )}
      </div>
    </section>
  )
}

export default DashboardView
