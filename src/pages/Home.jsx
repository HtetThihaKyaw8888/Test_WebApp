import { Link } from "react-router-dom"

export default function Home() {
  return (
    <section className="card">
      <h1>Top</h1>
      <p>This app is built with React Router, hooks and reusable components.</p>
      <Link className="btn" to="/tasks">Go to Tasks</Link>
    </section>
  )
}
