import { NavLink, Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <div className="app">
      <header className="header">
        <div className="brand">Task Manager</div>
        <nav className="nav">
          <NavLink to="/" className={({ isActive }) => (isActive ? "link active" : "link")}>Top</NavLink>
          <NavLink to="/tasks" className={({ isActive }) => (isActive ? "link active" : "link")}>Tasks</NavLink>
        </nav>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </div>
  )
}
