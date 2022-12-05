import { useState } from "react";

const Pomodoro = () => {
    const [seconds, setSeconds] = useState(60);
    const [timeLeft, setTimeLeft] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    /**
     * Extracts the number of hours, minutes, seconds in a total number of seconds
     * @param {int} total total number of seconds
     * @returns object having three members each representing number of hours, minutes, seconds
     */
    const separateTime = (total) => {
        const hours = Math.floor(total / 3600);
        const minutes = Math.floor((total % 3600) / 60);
        const seconds = total % 60;
        return { hours, minutes, seconds };
    };

    /**
     * Adds space-filling zeros in front of hours, minutes, and seconds if there's a need
     * @param {object} timeObj object that has 3 members(hours, minutes, seconds) all in numbers
     * @returns object that has 3 members(hours, minutes, seconds) all in string
     */
    const stringifyTime = (timeObj) => {
        const hours = `${timeObj.hours < 10 ? "0" : ""}${timeObj.hours}`;
        const minutes = `${timeObj.minutes < 10 ? "0" : ""}${timeObj.minutes}`;
        const seconds = `${timeObj.seconds < 10 ? "0" : ""}${timeObj.seconds}`;
        return { hours, minutes, seconds };
    };

    /**
     * Updates the state variable _timeLeft_ and thus updating the time left display
     * @param {int} seconds 
     */
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

    /**
     * Parses the time input by the user and turn it into number of seconds
     * @param {string} text
     * @returns int
     */
    const parseInput = (text) => {
        const timeParts = text.split(" ");
        let h = 0;
        let m = 0;
        let s = 0;

        if (timeParts.length === 3) {
            h = parseInt(timeParts[0]);
            m = parseInt(timeParts[1]);
            s = parseInt(timeParts[2]);
        } else if (timeParts.length === 2) {
            m = parseInt(timeParts[0]);
            s = parseInt(timeParts[1]);
        } else if (timeParts.length === 1) {
            s = parseInt(timeParts[0]);
        } else {
            alert("Must be in format: [hour minute second]")
        }

        return h * 3600 + m * 60 + s;
    }

    /**
     * Event handler that fires when user enters a custom time and clicks the submit button next to it
     * Firstly, parses the amount of time entered and then displays it
     */
    const handleInput = () => {
        // Get user input in seconds
        let seconds = parseInput(document.querySelector("#userInput").value);

        // Update time display
        displayTimeLeft(seconds);
    };

    return (
        <div className="pomodoro-container">
            <div className="form-control">
                <input id="userInput" type="text" />
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
