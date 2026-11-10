import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

function LoginView({ onLogin }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [submitting, setSubmitting] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  async function handleSubmit(event) {
    event.preventDefault()
    setError("")

    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.")
      return
    }

    setSubmitting(true)

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email: email.trim(),
          password,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(
          response.status === 401
            ? "401 - Invalid email or password."
            : data.error?.message || "Login failed."
        )
        return
      }

      setPassword("")
      onLogin(data.user)

      navigate(location.state?.from || "/dashboard", {
        replace: true,
      })
    } catch {
      setError("Could not connect to the authentication server.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="view-section auth-panel">
      <h2>Expedition Login</h2>

      <p>
        Sign in to access your protected expedition dashboard.
      </p>

      {location.state?.from && (
        <p className="auth-warning">
          Login required to access {location.state.from}.
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          autoComplete="username"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        {error && <p role="alert" className="auth-warning">{error}</p>}

        <button type="submit" disabled={submitting}>
          {submitting ? "Signing in..." : "Login"}
        </button>
      </form>
    </section>
  )
}

export default LoginView
