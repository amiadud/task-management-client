import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAuth from '../../../hooks/useAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Mytask = () => {

    const {user} = useAuth();

    const axiosOpen = useAxiosPublic()

    const [tasks, setTasks] = useState(['']);
    console.log(tasks)
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

      const onDeleteTask = async (taskId) => {
        try {
          const deletingTask = await axiosOpen.delete(`/tasks/${taskId}`);
          if(deletingTask.data.acknowledged){
            toast.success('Task deleted successfully')
              const remaining = tasks.filter(product => product._id !== taskId)
              setTasks(remaining);  
          }
          
        } catch (error) {
          console.error('Error deleting task:', error);
        }
      };

      const handleDelete = (task) => {
        onDeleteTask(task._id)
        console.log(task)
    }

    return (
        <div className="overflow-x-auto">
            <h2 className='text-4xl my-3'>My Task List</h2>
            <hr />
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Description</th>
        <th>Deadline</th>
        <th>Priority</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="">
        {
            tasks.length > 0 ? tasks.map((task, index) => {
                return (
                    <>
                    <td key={index}>
                    {index + 1}
                    </td>
                    <td>
                    {task?.title}
                    </td>
                    <td >
                    {task?.description}
                    </td>
                    <td >
                    {task?.deadline}
                    </td>
                    <td >
                    {task?.priority}
                    </td>
                    <td >
                    {task?.status}
                    </td>
                    <td className='relative'>
                    <button className='btn btn-sm btn-accent text-white' onClick={()=> handleDelete(task)}>Delete</button>
                   
                    </td>
                    </>
                )
            }
            
            ) : <><h2 className="text-xl  text-black my-2">Not Available Task</h2></>
        }
      </tr>
    </tbody>
  </table>
  <ToastContainer />
</div>
    );
};

export default Mytask;