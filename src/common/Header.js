import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/pomodoro">Pomodoro</Link>
            <Link to="/test">Test</Link>
            <Link to="/tasks">Tasks</Link>
        </div>
    );
};

export default Header;
