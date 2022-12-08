import Task from "./Task";
import React from "react";

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <div>
            <h1>Tasks</h1>
            <div className="tasks-container">
                {tasks.map((task) => (
                    <Task 
                      key={task.id}
                      task={task}
                      onDelete={onDelete}
                      onToggle={onToggle}
                    />
                ))}
            </div>
        </div>
    );
};

export default Tasks;
