export const Stats = ({ tasks }) => {
    const completed = tasks.filter(task => task.status == "completed").length
    const inProgress = tasks.filter(task => task.status == "in progress").length
    const unstarted = tasks.filter(task => task.status == "unstarted").length

    return <div>
        <h1>stats</h1>
        <p>completed : {completed}/{tasks.length}</p>
        <p>in progress : {inProgress}/{tasks.length}</p>
        <p>unstarted : {unstarted}/{tasks.length}</p>
    </div>
}