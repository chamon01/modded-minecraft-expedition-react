import { NavLink } from "react-router-dom"

function Navigation() {
  return (
    <nav className="main-nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/expeditions">Expeditions</NavLink>
    </nav>
  )
}

export default Navigation
