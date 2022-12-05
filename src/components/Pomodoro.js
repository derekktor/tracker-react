import React from "react";

const Pomodoro = () => {
    return (
        <div className="pomodoro-container">
            <h1>10:00</h1>
            <div className="buttons">
                <button>Start</button>
                <button>Stop</button>
                <button>Reset</button>
            </div>
        </div>
    );
};

export default Pomodoro;
