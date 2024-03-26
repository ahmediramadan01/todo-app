import Task from "../Task/Task";

export default function Tasks({ tasks, setTasks }) {
    return (
        <>
            <ul>
                {tasks.map((task) => {
                    return <Task key={task.id} index={task.id - 1} task={task} tasks={tasks} setTasks={setTasks} />;
                })}
            </ul>
        </>
    );
}
