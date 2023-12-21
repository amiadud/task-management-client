// src/components/TaskList.js

import React from 'react';
import PropTypes from 'prop-types';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import axios from 'axios';

const TaskList = ({ title, tasks, status, onDeleteTask }) => {

    const handleDelete = (task) => {
        onDeleteTask(task._id)
    }

  return (
    <div className="w-1/3 p-4">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <Droppable droppableId={status} key={status}>
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={`bg-gray-100 p-4 rounded-md ${
              snapshot.isDraggingOver ? 'border-dashed border-2' : ''
            }`}
          >
            {tasks.map((task, index) => (
               <Draggable draggableId={task._id} index={index}>
               {(provided, snapshot) => (
                 <div
                   {...provided.draggableProps}
                   {...provided.dragHandleProps}
                   ref={provided.innerRef}
                   className={`p-2 bg-white rounded-md shadow-md mb-2 ${
                     snapshot.isDragging ? 'opacity-50' : ''
                   }`}
                 >
                   <h3 className="text-lg font-semibold">{task.title}</h3>
                   <p className="text-sm">{task.description}</p>
                   <p className="text-xs mt-2">Priority: {task.priority}</p>
                   <p className="text-xs">Deadline: {task.deadline}</p>
                   <button className='btn btn-sm btn-accent text-white' onClick={()=> handleDelete(task)}>Delete</button>
                 </div>
               )}
             </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};


export default TaskList;
