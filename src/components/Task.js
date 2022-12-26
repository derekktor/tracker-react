import React from "react";
import { FaTimes } from "react-icons/fa";
import { format } from "date-fns";

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
                <p>{format(Date.parse(task.createdAt), "MM/dd/yyyy HH:mm:ss")}</p>
                <p>{format(Date.parse(task.finishedAt), "MM/dd/yyyy HH:mm:ss")}</p>
            </div>
        </div>
    );
};

export default Task;
