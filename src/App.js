import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./common/Header";
import Home from "./common/Home";
import Footer from "./common/Footer";
import Pomodoro from "./components/Pomodoro";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Test from "./components/Test";

function App() {
    let d = new Date();
    let date_ = `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
    let time_ = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

    const [time, setTime] = useState(`${date_} ${time_}`);
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "reading",
            desc: "Atomic Habits",
            createdAt: "2022/10/01 10:30",
            finishedAt: "2022/10/01 12:30",
            isActive: false,
        },
        {
            id: 2,
            title: "exercise",
            desc: "shadow boxing",
            createdAt: "2022/10/01 10:30",
            finishedAt: "2022/10/01 12:30",
            isActive: false,
        },
        {
            id: 3,
            title: "meditation",
            desc: "box breathing",
            createdAt: "2022/10/01 10:30",
            finishedAt: "2022/10/01 12:30",
            isActive: false,
        },
        {
            id: 4,
            title: "outreach",
            desc: "20",
            createdAt: "2022/10/01 10:30",
            finishedAt: "2022/10/01 12:30",
            isActive: false,
        },
    ]);

    /**
     * Sets the time started for a given task
     * @param {string} data time value that is passed from Pomodoro component
     */
    const handleTimeChange = (data) => {
        setTime(data);
    };

    /**
     * Deletes a given task from the list of tasks
     * @param {integer} id unique ID for a given task
     */
    const handleDeleteTask = (id) => {
        console.log("Deleting task...", id);
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
    };

    const handleToggleActive = (id) => {
        console.log("Toggling task...", id);
        const newTasks = tasks.map((task) =>
            task.id === id ? { ...task, isActive: !task.isActive } : task
        );
        setTasks(newTasks);
    };

    const handleAddTask = (task) => {
        console.log("Adding task", task);
    };

    return (
        <Router>
            <div className="app">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/pomodoro"
                            element={
                                <Pomodoro
                                    changeTimeStarted={handleTimeChange}
                                />
                            }
                        />
                        <Route path="/test" element={<Test />} />
                        <Route
                            path="/tasks"
                            element={
                                tasks.length > 0 ? (
                                    <Tasks
                                        tasks={tasks}
                                        onDelete={handleDeleteTask}
                                        onToggle={handleToggleActive}
                                    />
                                ) : (
                                    <h2>You have no tasks!</h2>
                                )
                            }
                        />
                        <Route
                            path="/task/add"
                            element={
                                <AddTask
                                    onAdd={handleAddTask}
                                    timeStarted={time}
                                />
                            }
                        />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
