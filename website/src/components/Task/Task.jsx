export default function Task({ index, task, tasks, setTasks }) {
    const completeTask = (event, task) => {
        // console.log(task);
        let completedStatus = !task.completed;
        let completedTask = { ...task, completed: completedStatus };
        tasks.splice(index, 1, completedTask);
        setTasks([...tasks]);
    };

    const deleteTask = (event, index) => {
        // console.log(index);
        tasks.splice(index, 1);
        // console.log(tasks.length);
        for (let i = 0; i < tasks.length; i++) {
            // console.log(tasks[i]);
            tasks[i].id = i + 1;
        }
        // console.log(tasks);
        setTasks([...tasks]);
    };

    return (
        <>
            <li className="text-2xl mb-8 flex justify-between items-center">
                <p className={`task ${task.completed ? "line-through" : "no-underline"}`}>{task.task}</p>
                <div>
                    <button
                        className="bg-white p-2 text-2xl mr-2 text-green-500"
                        onClick={(event) => {
                            completeTask(event, task);
                        }}>
                        Complete
                    </button>
                    <button
                        className="bg-white p-2 text-2xl text-red-600"
                        onClick={(event) => {
                            deleteTask(event, index);
                        }}>
                        Delete
                    </button>
                </div>
            </li>
        </>
    );
}
