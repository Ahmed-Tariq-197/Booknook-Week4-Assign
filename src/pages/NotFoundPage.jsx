import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="page-section not-found">
      <h2>404</h2>
      <p>There's nothing here - the page you're looking for doesn't exist.</p>
      <Link to="/">Back to Home</Link>
    </section>
  );
}

export default NotFoundPage;
