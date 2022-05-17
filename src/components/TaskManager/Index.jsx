import React from 'react'
import Header from '../Header/Index'
import TaskList from '../TaskList/Index'
import AddForm from '../AddForm/Index'
import './Style.css'

const TaskManager = ({ tasks, onDelete, onToggle, onAdd, onShow, setOnShow, onShowInverted}) => {

  return (
    <div className="task-manager">
        {onShow ? <Header onShow={onShowInverted} text='Close' color='red'/> : <Header 
        onShow={()=> setOnShow(!onShow) } text='Add' color='green'/>}
        {onShow && <AddForm onAdd={onAdd}/>}


        {tasks.length > 0 ? 
        <TaskList 
        tasks={tasks} 
        onDelete={onDelete} 
        onToggle={onToggle} /> 
        : ('No Tasks to SHOW') }
    </div>
  )
}

export default TaskManager