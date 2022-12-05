import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./common/Header";
import Home from "./common/Home";
import Footer from "./common/Footer";
import Pomodoro from "./components/Pomodoro";

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/timer" element={<Pomodoro/>} />
                    </Routes>
                </Router>
            </main>
            <Footer />
        </div>
    );
}

export default App;
