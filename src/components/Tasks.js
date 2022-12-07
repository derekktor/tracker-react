import Task from "./Task";
import React from "react";

const Tasks = ({ tasks, onDelete }) => {
    return (
        <div>
            <h1>Tasks</h1>
            <div className="tasks-container">
                {tasks.map((task) => (
                    // <div key={task.id} className="task">
                    //     <h4>{task.title}</h4>
                    // </div>
                    <Task 
                      key={task.id}
                      task={task}
                      onDelete={onDelete}
                    />
                ))}
            </div>
        </div>
    );
};

export default Tasks;
