import PropTypes from 'prop-types';
import React from "react";
import { useState } from "react";

const AddTask = ({ timeStarted, onAdd }) => {
    let d = new Date();
    let date = `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
    let time = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const finishedAt = `${date} ${time}`;

    const onAddTask = (e) => {
        e.preventDefault();

        if (!title) {
            alert("Please enter title!");
            return;
        }

        if (!desc) {
            alert("Please enter description!");
            return;
        }


        onAdd({ title, desc, createdAt: timeStarted, finishedAt });

        setTitle("");
        setDesc("");
    }

    return (
        <div>
            <h1>Add Task</h1>
            <form onSubmit={onAddTask}>
                <div className="form-control">
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="reading, meditation..."
                    />
                </div>
                <div className="form-control">
                    <label>Description:</label>
                    <input
                        type="text"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        placeholder="one thing, boxing..."
                    />
                </div>
                <div className="form-control">
                    <label>Created At:</label>
                    <input
                        type="text"
                        value={timeStarted}
                        readOnly
                        // onChange={(e) => setCreatedAt(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label>Finished At:</label>
                    <input
                        type="text"
                        value={finishedAt}
                        readOnly
                        // onChange={(e) => setFinishedAt(e.target.value)}
                    />
                </div>

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

AddTask.defaultProps = {
    timeStarted: "2022/12/31 00:00"
}

AddTask.propTypes = {
    timeStarted: PropTypes.string
}

export default AddTask;
