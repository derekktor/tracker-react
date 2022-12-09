import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./common/Header";
import Home from "./common/Home";
import Footer from "./common/Footer";
import Pomodoro from "./components/Pomodoro";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Test from "./components/Test";

const DB_URL = "http://localhost:5000";

function App() {
    let d = new Date();
    let date_ = `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
    let time_ = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

    const [time, setTime] = useState(`${date_} ${time_}`);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromDB = await fetchTasks();
            setTasks(tasksFromDB);
        }

        getTasks();
    }, []);

    const fetchTasks = async () => {
        const res = await fetch(DB_URL + "/tasks");
        const data = await res.json();
        return data;
    };
    
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
    const handleDeleteTask = async (id) => {
        console.log("Deleting task...", id);

        await fetch(DB_URL + `/tasks/${id}`, {
            method: "DELETE",
        })

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
        const id = Math.floor(Math.random() * 100);
        const newTask = { id, ...task };
        const newTasks = [...tasks, newTask];
        setTasks(newTasks);
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
