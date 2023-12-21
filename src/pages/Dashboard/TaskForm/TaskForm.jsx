import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const TaskForm = ({ onAddTask }) => {

  const {user} = useAuth();

  const { handleSubmit, control } = useForm({
    defaultValues: {
      status: 'todos',
      email: user?.email,
       // Set the initial status value here
    },
  });

  

  const onSubmit = async (data) => {

    onAddTask(data)
    console.log(data)
  };


  return (

    <>
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Create New Task</h2>

      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
          Title
        </label>
        <Controller
          name="title"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              type="text"
              placeholder="Enter title"
              className="w-full p-2 border rounded-md"
            />
          )}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
          Description
        </label>
        <Controller
          name="description"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <textarea
              {...field}
              placeholder="Enter description"
              className="w-full p-2 border rounded-md"
            />
          )}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="deadline" className="block text-gray-700 text-sm font-bold mb-2">
          Deadline
        </label>
        <Controller
          name="deadline"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              type="date"
              className="w-full p-2 border rounded-md"
            />
          )}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="priority" className="block text-gray-700 text-sm font-bold mb-2">
          Priority
        </label>
        <Controller
          name="priority"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <select {...field} className="w-full p-2 border rounded-md">
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
            </select>
          )}
        />
      </div>


      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Submit
      </button>
    </form>
    </>
  );
};

export default TaskForm;