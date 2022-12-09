import React from "react";
import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div 
            onDoubleClick={() => onToggle(task.id)}
            className={task.isActive ? "task active" : "task"}>
            <div className="flex-horizontal">
                <h4>{task.title}</h4>
                <FaTimes
                    className="cross"
                    onClick={() => onDelete(task.id)}
                />
            </div>
            <p>{task.createdAt}</p>
            <p>{task.finishedAt}</p>
        </div>
    );
};

export default Task;
