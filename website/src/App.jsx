import { useState } from "react";
import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";

export default function App() {
    const [tasks, setTasks] = useState([]);

    return (
        <>
            <div className="bg-cyan-700 text-white py-8 min-h-screen">
                <div className="container mx-auto">
                    <Header tasks={tasks} setTasks={setTasks} />
                    <Tasks tasks={tasks} setTasks={setTasks} />
                </div>
            </div>
        </>
    );
}
