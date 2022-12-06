import { useState, useRef } from "react";

const Pomodoro = () => {
    const [seconds, setSeconds] = useState(0);
    const timerId = useRef();

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
        return `${hours}:${minutes}:${seconds}`;
    };

    /**
     * Parses the time input by the user and turn it into number of seconds
     * @param {string} text
     * @returns int
     */
    const parseInput = (text) => {
        const timeParts = text.trim().split(" ");
        let h = 0;
        let m = 0;
        let s = 0;

        // Check if string contains letters
        if (/[a-z]/i.test(text)) {
            alert("Please do not enter any letters!");
        }

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
            alert("Must be in format: [hour minute second]");
        }

        return h * 3600 + m * 60 + s;
    };

    /**
     * Event handler that fires when user enters a custom time and clicks the submit button next to it
     * Firstly, parses the amount of time entered and then displays it
     */
    const handleUserInput = (e) => {
        e.preventDefault();

        // Read user's input and change number of seconds remaining
        setSeconds(parseInput(document.querySelector("#userInput").value));

        // Clear field
        document.querySelector("#userInput").value = "";
    };

    /**
     * Decrements state variable _seconds_ and shows alert when finished
     */
    const startTimer = () => {
        timerId.current = setInterval(() => {
            setSeconds((prev) => {
                if (prev > 0) {
                    prev -= 1;
                } else {
                    clearInterval(timerId.current);
                    alert("Time's up!")
                }

                return prev;
            });
        }, 1000);
    };

    /**
     * Stops timer
     */
    const stopTimer = () => {
        clearInterval(timerId.current);
    };

    /**
     * Resets timer
     */
    const resetTimer = () => {
        clearInterval(timerId.current);
        setSeconds(prev => 0);
    }

    return (
        <div className="pomodoro-container">
            <section>
                <input id="userInput" type="text" />
                <button type="submit" onClick={handleUserInput}>
                    Submit
                </button>
            </section>
            <h1>
                {stringifyTime(separateTime(seconds))}
            </h1>
            <div className="buttons">
                <button onClick={startTimer}>Start</button>
                <button onClick={stopTimer}>Stop</button>
                <button onClick={resetTimer}>Reset</button>
            </div>
        </div>
    );
};

export default Pomodoro;
