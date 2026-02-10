import { useState } from "react"

export default function TaskForm({ onAdd }) {
  const [text, setText] = useState("")

  const submit = (e) => {
    e.preventDefault()
    const v = text.trim()
    if (!v) return
    onAdd(v)
    setText("")
  }

  return (
    <form onSubmit={submit} className="row">
      <input className="input" value={text} onChange={(e) => setText(e.target.value)} placeholder="Add a task" />
      <button className="btn" type="submit">Add</button>
    </form>
  )
}
