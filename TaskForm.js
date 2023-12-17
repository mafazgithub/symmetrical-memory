
import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleAddTask = () => {
    const newTask = { id: tasks.length + 1, name: taskName };
    onAddTask(newTask);
    setTaskName('');
  };

  return (
    <div>
      <h2>Add Task</h2>
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={handleTaskNameChange}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskForm;
