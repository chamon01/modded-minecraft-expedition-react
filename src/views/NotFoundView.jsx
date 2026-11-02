import { Link } from "react-router-dom"

function NotFoundView() {
  return (
    <section className="view-section not-found">
      <h2>Page Not Found</h2>
      <p>The page you requested does not exist.</p>

      <Link className="primary-link" to="/">
        Return home
      </Link>
    </section>
  )
}

export default NotFoundView
