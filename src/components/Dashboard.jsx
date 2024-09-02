import axios from 'axios'
import { useEffect, useState } from 'react'
import { AddTask } from "./AddTask"
import { Stats } from "./Stats"
import { TaskList } from "./TaskList"

export const Dashboard = () => {

    const [tasks, setTasks] = useState([])

    const addTask = (task) => {
        setTasks([...tasks, task])
    }
    const handleDelete = (id) => {
        setTasks(tasks.filter(task => task.id != id))
    }
    const update = (id, start) => {
        console.log(id, start)
        axios
            .patch("http://localhost:3004/tasks/" + id, { status: start })
            .then(response => {
                setTasks(tasks.map(task => task.id == id ? { ...task, status: start } : task))
            })

    }

    useEffect(() => {
        axios
            .get('http://localhost:3004/tasks')
            .then(response => {
                setTasks(response.data)
            })

    }, [])

    return <div className="dashboard">
        <div className="row">
            <TaskList tasks={tasks} onDelete={handleDelete} onUpdateStatus={update} />
            <AddTask onAdd={addTask} />
        </div>
        <Stats tasks={tasks} />
    </div>
}