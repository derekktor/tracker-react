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
    const d = new Date().toISOString();

    const [time, setTime] = useState(d);
    const [tasks, setTasks] = useState([]);
    const [prevTasks, setPrevTasks] = useState([]);

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromDB = await fetchTasks();
            setTasks(tasksFromDB);
        };

        getTasks();
    }, []);

    /**
     * GET /tasks
     */
    const fetchTasks = async () => {
        const res = await fetch(DB_URL + "/tasks");
        const data = await res.json();
        return data;
    };

    /**
     * GET /tasks/:id
     */
    const fetchTask = async (id) => {
        const res = await fetch(DB_URL + "/tasks/" + id);
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
        });

        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
    };

    /**
     * Fetches the task with the given ID
     * Toggles the isActive field
     * Makes PUT request to the tasks with that ID
     * Updates the local set of tasks
     *
     * @param {int} id primary key for tasks collection
     */
    const handleToggleActive = async (id) => {
        console.log("Toggling task...", id);

        const taskToToggle = await fetchTask(id);
        const updTask = { ...taskToToggle, isActive: !taskToToggle.isActive };

        const res = await fetch(DB_URL + "/tasks/" + id, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(updTask),
        });
        const data = await res.json();

        const newTasks = tasks.map((task) =>
            task.id === id ? { ...task, isActive: data.isActive } : task
        );
        setTasks(newTasks);
    };

    /**
     * Performs HTTP POST request to the database and adds the given task object
     * @param {object} task Object representing the task, with 4 fields(title, description, date created and date finished)
     */
    const handleAddTask = async (task) => {
        console.log("Adding task", task);

        const res = await fetch(DB_URL + "/tasks", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(task),
        });

        const newTask = await res.json();

        const newTasks = [...tasks, newTask];
        setTasks(newTasks);
    };

    return (
        <Router>
            <div className="app">
                <Header />
                <main>
                    <Routes>
                        <Route
                            path="/"
                            element={<Home time={time} tasks={prevTasks} />}
                        />
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
