import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./common/Header";
import Home from "./common/Home";
import Footer from "./common/Footer";
import Pomodoro from "./components/Pomodoro";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Test from "./components/Test";

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/pomodoro" element={<Pomodoro />} />
                        <Route path="/test" element={<Test />} />
                        <Route path="/tasks" element={<Tasks />} />
                        <Route path="/task/add" element={<AddTask />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
