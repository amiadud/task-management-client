import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TaskForm from '../TaskForm/TaskForm';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import TaskList from '../TaskList/TaskList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const TaskManagement = () => {

  const axiosOpen = useAxiosPublic();

    const { user } = useAuth();
    
    const [tasks, setTasks] = useState(['']);
    
    useEffect(() => {
        // Fetch tasks from your API when the component mounts

        fetchTasks();

      }, []);
    
      const fetchTasks = async () => {
        try {
          const response = await axiosOpen.get(`/tasks?email=${user?.email}`);
          setTasks(response.data);
        } catch (error) {
          console.error('Error fetching tasks:', error);
        }
      };

      const onDragEnd = async (result) => {
        if (!result.destination) return;
    
        const sourceStatus = result.source.droppableId;
        const destinationStatus = result.destination.droppableId;
        const taskId = result.draggableId;
    
        // Update task status when dragging to a different status
        if (sourceStatus !== destinationStatus) {
          try {
            await axiosOpen.put(`/tasks/${taskId}`, {
              status: destinationStatus,
            });
            if(destinationStatus =='ongoing') {
                toast.success("Ongoing!")
            }
            else if(destinationStatus =='completed') {
                toast.success("Completed!")
            }
            else if(destinationStatus =='todos') {
                toast.success("Todos!")
            }
    
            // Fetch updated tasks after the update
            fetchTasks();
          } catch (error) {
            console.error('Error updating task status:', error);
          }
        }
      };

      const onDeleteTask = async (taskId) => {
        try {
          const deletingTask = await axiosOpen.delete(`/tasks/${taskId}`);
          if(deletingTask.data.acknowledged){
            toast.success("Task Delete Success!")
          }
          fetchTasks();
        } catch (error) {
          console.error('Error deleting task:', error);
        }
      };

    return (
        <>
        <h2 className='text-4xl my-3'>To Do List</h2>
        <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-columns" direction="horizontal" type="column">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef} className="flex justify-center  md:flex-row flex-col ">
            <TaskList title="To-Do" tasks={tasks.filter((task) => task.status === 'todos')} status="todos" onDeleteTask={onDeleteTask} />
            <TaskList
              title="Ongoing"
              tasks={tasks.filter((task) => task.status === 'ongoing')}
              status="ongoing"
              onDeleteTask={onDeleteTask}
            />
            <TaskList
              title="Completed"
              tasks={tasks.filter((task) => task.status === 'completed')}
              status="completed"
              onDeleteTask={onDeleteTask}
            />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <ToastContainer />
    </DragDropContext>
    </>
    );
};


export default TaskManagement;