import { useEffect, useMemo, useState } from "react"
import { Link, useParams } from "react-router-dom"

const KEY = "tasks_v1"

const loadTasks = () => {
  const raw = localStorage.getItem(KEY)
  if (!raw) return []
  try {
    const parsed = JSON.parse(raw)
    if (Array.isArray(parsed)) return parsed
    return []
  } catch {
  return []
}

}

export default function TaskDetail() {
  const { id } = useParams()
  const [tasks, setTasks] = useState(loadTasks)

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(tasks))
  }, [tasks])

  const task = useMemo(() => tasks.find((t) => t.id === id), [tasks, id])

  const toggle = () => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)))
  }

  if (!task) {
    return (
      <section className="card">
        <h1>Task Detail</h1>
        <p className="muted">Task not found.</p>
        <Link className="btn" to="/tasks">Back</Link>
      </section>
    )
  }

  return (
    <section className="card">
      <h1>Task Detail</h1>
      <p className={task.done ? "title done" : "title"}>{task.title}</p>
      <div className="row">
        <button className="btn" onClick={toggle}>{task.done ? "Mark Todo" : "Mark Done"}</button>
        <Link className="btn ghost" to="/tasks">Back</Link>
      </div>
    </section>
  )
}
