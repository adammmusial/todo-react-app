import React from 'react'
import './TaskColumn.css'
import TaskCard from './TaskCard'

export const Column = ({title,icon, tasks, status, handleDelete, index}) => {
  return (
    <section className="task_column">
        <h2 className='task_column_heading'>
            <img className='task_column_icon'src={icon} alt=''></img>
            {title}
        </h2>
        {
          tasks.map((task,index) => task.status === status && 
          <TaskCard 
            key={index} 
            title={task.task} 
            tags={task.tags}
            handleDelete={handleDelete}
            index={index}/>
          )
        }
        
    </section>
  )
}

