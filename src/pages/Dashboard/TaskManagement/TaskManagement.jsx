import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TaskForm from '../TaskForm/TaskForm';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import TaskList from '../TaskList/TaskList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';

const TaskManagement = () => {

    const { user } = useAuth();
    
    const [tasks, setTasks] = useState(['']);
    
    useEffect(() => {
        // Fetch tasks from your API when the component mounts

        fetchTasks();

      }, []);
    
      const fetchTasks = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/tasks?email=${user?.email}`); // Replace with your actual API endpoint
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
            await axios.put(`http://localhost:5000/tasks/${taskId}`, {
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



      const onAddTask = async (data) => {
        try {
          const response = await axios.post('http://localhost:5000/tasks', data); // Replace with your actual API endpoint

          setTasks([...tasks, response.data]);
        } catch (error) {
          console.error('Error adding task:', error);
        }
        
      };

      const handleEditTask = async (data) => {
        try {
          await axios.patch(`http://localhost:5000/tasks/${data.id}`, {
            title: data.title,
            description: data.description,
            priority: data.priority,
            deadline: data.deadline,
          });
    
          fetchTasks();
          setEditTask(null); // Reset the edit task
        } catch (error) {
          console.error('Error editing task:', error);
        }
      };

      const onDeleteTask = async (taskId) => {
        try {
          const deletingTask = await axios.delete(`http://localhost:5000/tasks/${taskId}`);
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
      <TaskForm onAddTask={onAddTask} />
      <ToastContainer />
    </DragDropContext>
    </>
    );
};


export default TaskManagement;