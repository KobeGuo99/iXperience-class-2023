import "./App.css";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Task } from "./models/Task";
import TaskInput from "./components/TaskInput";
import TaskTable from "./components/TaskTable";
import TaskService from "./services/task-service";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (!tasks.length) {
      onInitialLoad();
    }
  }, []);

  async function onInitialLoad() {
    try {
      const tasks = await TaskService.fetchTasks();
      setTasks(tasks);
    } catch (err) {
      console.log(err);
    }
  }

  async function onTaskCreate(name) {
    const task = await TaskService.createTask(new Task(null, name, false));
    setTasks([...tasks, task]);
  }

  async function onTaskRemove(taskId) {
    await TaskService.deleteTask(taskId);
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  async function onTaskCompleteToggle(taskId) {
    const taskToToggle = tasks.find((task) => task.id === taskId);
    taskToToggle.complete = !taskToToggle.complete;

    const updatedTask = await TaskService.updateTask(taskToToggle);

    setTasks(
      tasks.map((task) => {
        return task.id === taskId ? updatedTask : task;
      })
    );
  }

  // function saveTasksToLocalStorage() {
  //   const json = JSON.stringify(tasks);
  //   localStorage.setItem('tasks', json);
  // }

  // function loadTasksFromLocalStorage() {
  //   const json = localStorage.getItem('tasks');
  //   if (json) {
  //     const taskArr = JSON.parse(json);
  //     if (taskArr.length) {
  //       setTasks(taskArr.map((x) => Task.fromJson(x)));
  //     }
  //   }
  // }

  return (
    <div className="container mt-5">
      <div className="card card-body text-center">
        <h1>Task List</h1>
        <hr />
        <p>Our Task List</p>

        <TaskInput onTaskCreate={onTaskCreate} />
        <TaskTable
          tasks={tasks}
          onTaskRemove={onTaskRemove}
          onTaskCompleteToggle={onTaskCompleteToggle}
        />
      </div>
    </div>
  );
}

export default App;
