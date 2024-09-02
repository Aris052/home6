import axios from 'axios'

export const Task = ({ task, onDelete, onUpdateStatus }) => {
    const handleDelete = () => {
        axios
            .delete("http://localhost:3004/tasks/" + task.id)
            .then(response => {
                onDelete(response.data.id)
            })
    }
    return <div>
        <h3>{task.text}</h3>
        <small>status: {task.status}</small>
        {
            task.status == "completed" ? <img src="https:cdn2.iconfinder.com/data/icons/internet-download-manager-1/64/11_Completed_check_tick_verified_approved-1024.png" />
                : task.status == "in progress" ? <img src="https://cdn2.iconfinder.com/data/icons/time-date-management-1/64/time__data_management-12-512.png" />
                    : <img src="https://cdn3.iconfinder.com/data/icons/fluent-regular-24px-vol-5/24/ic_fluent_navigation_unread_24_regular-1024.png" />
        }
        <select value={task.status} onChange={event => { onUpdateStatus(task.id, event.target.value) }}>
            <option>in progress</option>
            <option>unstarted</option>
            <option>completed</option>
        </select>
        <button onClick={handleDelete}>Delete</button>
    </div>
}


/*

COMPLETED:
https://cdn2.iconfinder.com/data/icons/internet-download-manager-1/64/11_Completed_check_tick_verified_approved-1024.png

IN PROGERSS:
https://cdn2.iconfinder.com/data/icons/time-date-management-1/64/time__data_management-12-512.png

UNSTARTED
https://cdn3.iconfinder.com/data/icons/fluent-regular-24px-vol-5/24/ic_fluent_navigation_unread_24_regular-1024.png
*/