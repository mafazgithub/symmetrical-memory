

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// In-memory data storage (replace with a database in a real app)
const tasks = [];
const users = [];

// Routes
app.post('/login', (req, res) => {
  // Simulate login logic (replace with real authentication)
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.post('/tasks', (req, res) => {
  // Simulate task creation (replace with database storage)
  const { taskName } = req.body;
  const newTask = { id: tasks.length + 1, name: taskName };
  tasks.push(newTask);

  res.json(newTask);
});

app.get('/tasks', (req, res) => {
  // Return the list of tasks
  res.json(tasks);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
