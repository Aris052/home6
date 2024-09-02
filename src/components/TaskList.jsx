import { Task } from './Task'

export const TaskList = ({ tasks, onDelete, onUpdateStatus }) => {
    return <div>
        <p>TaskList</p>
        <div className="list">
            {
                tasks.map(task => <Task key={task.id} task={task} onDelete={onDelete} onUpdateStatus={onUpdateStatus} />)
            }
        </div>
    </div>
}