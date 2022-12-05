import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./common/Header";
import Home from "./common/Home";
import Footer from "./common/Footer";
import Pomodoro from "./components/Pomodoro";
import Tasks from "./components/Tasks";

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/pomodoro" element={<Pomodoro />} />
                        <Route path="/tasks" element={<Tasks />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
