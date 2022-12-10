import React from "react";
import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div
            onDoubleClick={() => onToggle(task.id)}
            className={task.isActive ? "task active" : "task"}
        >
            <div className="flex-horizontal">
                <div className="ctx">
                    <h4>{task.title}</h4>
                    <h5>{task.desc}</h5>
                </div>
                <FaTimes className="cross" onClick={() => onDelete(task.id)} />
            </div>
            <div className="flex-horizontal">
            <p>{task.createdAt}</p>
            <p>{task.finishedAt}</p>

            </div>
        </div>
    );
};

export default Task;
