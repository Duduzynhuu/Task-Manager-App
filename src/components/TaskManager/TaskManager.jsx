import React from 'react'
import Header from '../Header/Header'
import TaskList from '../TaskList/TaskList'
import AddForm from '../AddForm/AddForm'
import './TaskManager.css'

const TaskManager = ({ tasks, onDelete, onToggle, onAdd, onShow, setOnShow, b}) => {

  return (
    <div className="task-manager">
        {onShow ? <Header onShow={b} text='Close' color='red'/> : <Header 
        onShow={()=> setOnShow(!onShow) } text='Add' color='green'/>}
        {onShow && <AddForm onAdd={onAdd}/>}
        {tasks.length > 0 ? <TaskList tasks={tasks} onDelete={onDelete} onToggle={onToggle} /> : ('No Tasks to SHOW') }
    </div>
  )
}

export default TaskManager