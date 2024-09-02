import axios from 'axios'
import { useState } from 'react'

export const AddTask = ({ onAdd }) => {
    const [text, setText] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!text.trim()) {
            return setError("please fill the field")
        }
        setError("")
        axios
            .post("http://localhost:3004/tasks", { text, status: "unstarted" })
            .then(response => {
                onAdd(response.data)
                setText("")
            })
    }

    return <div>

        <h2>AddTask</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input value={text} onChange={event => setText(event.target.value)} />
        <form onClick={handleSubmit}>
            <button>ADD</button>
        </form>
    </div>
}