import { useState } from "react";

function Header({ tasks, setTasks }) {
    const [task, setTask] = useState("");

    const handleInput = (event) => {
        setTask(event.target.value);
    };

    const addTask = (event) => {
        event.preventDefault();
        if (!task) return;
        let currentTask = { id: tasks.length + 1, task, completed: false };
        setTasks([...tasks, currentTask]);
        document.querySelector("#task-input").value = "";
    };

    return (
        <>
            <h1 className="text-4xl font-bold mb-8 text-center">Todo App</h1>
            <form
                className="flex justify-center mb-12"
                onSubmit={(event) => {
                    addTask(event);
                }}>
                <input
                    id="task-input"
                    className="mr-8 text-black px-3"
                    type="text"
                    onChange={(event) => {
                        handleInput(event);
                    }}
                />
                <button id="add-button" className="bg-white text-black p-2 text-2xl">
                    Add
                </button>
            </form>
        </>
    );
}

export default Header;
