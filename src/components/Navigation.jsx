import { NavLink } from "react-router-dom"

function Navigation({ user, onLogout }) {
  return (
    <nav className="main-nav">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/expeditions">Expeditions</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>

      {user ? (
        <>
          <span className="login-state">
            Logged in: {user.email} ({user.role})
          </span>

          <button type="button" onClick={onLogout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <span className="login-state">Logged out</span>
          <NavLink to="/login">Login</NavLink>
        </>
      )}
    </nav>
  )
}

export default Navigation
