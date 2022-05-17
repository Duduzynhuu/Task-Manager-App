import TaskManager from './components/TaskManager/TaskManager';
import { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [tasks, setTasks] = useState([])
  const [showAddTask, setShowAddTask] = useState(false)

  useEffect(()=> {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    
    return data
  }
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    
    return data
  }

  const invertStado = () => {
    setShowAddTask(!showAddTask)
  }
  
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type' :'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await res.json()
    setTasks([...tasks, data])

    // const id = Math.floor(Math.random() *10000 ) + 1
    // const newTask = {...task, id}
    // setTasks([...tasks, newTask])
}

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })

    setTasks(tasks.filter((task)=> task.id !== id ))
  }

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })
    const data = await res.json()
  
    setTasks(
      tasks.map((task)=> task.id === id ? { ...task, reminder: data.reminder } : task)
    )
  }
  return (
    <div className="App">
     <TaskManager 
     tasks={tasks} 
     onDelete={deleteTask} 
     onToggle={toggleReminder} 
     onAdd={addTask} 
     onShow={showAddTask} 
     setOnShow={setShowAddTask} 
     b={invertStado} />
    </div>
  );
}

export default App;