import { useState } from "react";

const Pomodoro = () => {
    const [seconds, setSeconds] = useState(60);
    const [timeLeft, setTimeLeft] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const separateTime = (seconds) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return { hours: h, minutes: m, seconds: s };
    };

    const stringifyTime = (timeObj) => {
        const hours = `${timeObj.hours < 10 ? "0" : ""}${timeObj.hours}`;
        const minutes = `${timeObj.minutes < 10 ? "0" : ""}${timeObj.minutes}`;
        const seconds = `${timeObj.seconds < 10 ? "0" : ""}${timeObj.seconds}`;
        return { hours, minutes, seconds };
    };

    const displayTimeLeft = (seconds) => {
        // Separate minutes and seconds
        const timeObj = separateTime(seconds);

        // Change for better visibility
        const timeStr = stringifyTime(timeObj);

        const display = timeStr.h + ":" + timeStr.m + ":" + timeStr.s;

        // Update the title
        document.title = display;

        // Update body element
        setTimeLeft(timeStr);
    };

    const handleInput = () => {
        // Get user input in seconds
        let seconds = document.querySelector("#userInput").value;

        // Update time display
        displayTimeLeft(seconds);
    };

    return (
        <div className="pomodoro-container">
            <div className="form-control">
                <input id="userInput" type="number" />
                <button onClick={handleInput}>Submit</button>
            </div>
            <h1>
                {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
            </h1>
            <div className="buttons">
                <button>Start</button>
                <button>Stop</button>
                <button>Reset</button>
            </div>
        </div>
    );
};

export default Pomodoro;
