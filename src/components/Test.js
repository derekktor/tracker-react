import React from "react";
import { useState, useEffect, useRef } from "react";

const Test = () => {
    const [text, setText] = useState("");
    const [seconds, setSeconds] = useState(0);
    const timerId = useRef();

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const startTimer = () => {
        timerId.current = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);
    };

    const stopTimer = () => {
        clearInterval(timerId.current);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h1>{seconds}</h1>
            <section>
                <button onClick={startTimer}>Start</button>
                <button onClick={stopTimer}>Stop</button>
            </section>
            <br />
            <input type="text" value={text} onChange={handleChange} />
        </div>
    );
};

export default Test;
