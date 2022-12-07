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
    const [time, setTime] = useState("default");
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "reading",
            desc: "Atomic Habits",
            createdAt: "2022/10/01 10:30",
            finishedAt: "2022/10/01 12:30",
        },
        {
            id: 2,
            title: "exercise",
            desc: "shadow boxing",
            createdAt: "2022/10/01 10:30",
            finishedAt: "2022/10/01 12:30",
        },
        {
            id: 3,
            title: "meditation",
            desc: "box breathing",
            createdAt: "2022/10/01 10:30",
            finishedAt: "2022/10/01 12:30",
        },
        {
            id: 4,
            title: "outreach",
            desc: "20",
            createdAt: "2022/10/01 10:30",
            finishedAt: "2022/10/01 12:30",
        },
    ]);

    const handleTimeChange = (data) => {
        setTime(data);
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
                        <Route path="/tasks" element={<Tasks tasks={tasks}/>} />
                        <Route
                            path="/task/add"
                            element={
                                <AddTask timeStarted={time} />
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
