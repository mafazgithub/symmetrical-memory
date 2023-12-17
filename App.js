
import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simulate login logic
    setLoggedIn(true);
  };
// 
  const handleLogout = () => {
    // Simulate logout logic
    setLoggedIn(false);
  };

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <h1>Task Scheduler</h1>

      {loggedIn ? (
        <>
          <button onClick={handleLogout}>Logout</button>
          <TaskForm onAddTask={addTask} />
          <TaskList tasks={tasks} />
        </>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default App;
