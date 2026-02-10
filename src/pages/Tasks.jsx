import { useEffect, useMemo, useState } from "react"
import TaskForm from "../components/TaskForm.jsx"
import TaskList from "../components/TaskList.jsx"

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

export default function Tasks() {
  const [tasks, setTasks] = useState(loadTasks)

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(tasks))
  }, [tasks])

  const remaining = useMemo(() => tasks.filter((t) => !t.done).length, [tasks])

  const add = (title) => {
    const task = { id: crypto.randomUUID(), title, done: false, createdAt: Date.now() }
    setTasks((prev) => [task, ...prev])
  }

  const toggle = (id) => setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)))
  const remove = (id) => setTasks((prev) => prev.filter((t) => t.id !== id))

  return (
    <section className="card">
      <h1>Tasks</h1>
      <TaskForm onAdd={add} />
      <div className="meta">Remaining: {remaining}</div>
      <TaskList items={tasks} onToggle={toggle} onRemove={remove} />
    </section>
  )
}
