import { Link } from "react-router-dom"

export default function TaskList({ items, onToggle, onRemove }) {
  if (items.length === 0) return <p className="muted">No tasks yet.</p>

  return (
    <ul className="list">
      {items.map((t) => (
        <li key={t.id} className="item">
          <div className="left">
            <button className="btn ghost" onClick={() => onToggle(t.id)}>{t.done ? "Done" : "Todo"}</button>
            <Link className={t.done ? "title done" : "title"} to={`/tasks/${t.id}`}>{t.title}</Link>
          </div>
          <button className="btn ghost" onClick={() => onRemove(t.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}
