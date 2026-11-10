import { Navigate, useLocation } from "react-router-dom"

function ProtectedRoute({ user, checking, children }) {
  const location = useLocation()

  if (checking) {
    return <p>Checking your login...</p>
  }

  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location.pathname }}
      />
    )
  }

  return children
}

export default ProtectedRoute
