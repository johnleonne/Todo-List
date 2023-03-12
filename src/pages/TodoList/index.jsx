import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TaskForm from '../../components/TaskForm';
import TaskList from '../../components/TaskList';

function TodoList() {
  const [listTasks, setListTasks] = useState([]);

  const addTask = (description) => {
    const newTask = {
      id: uuidv4(),
      description,
      done: false,
    };

    setListTasks([...listTasks, newTask]);
  };

  const removeTask = (id) => {
    setListTasks(listTasks.filter((task) => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setListTasks((prevListTasks) => prevListTasks.map((task) => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    }));
  };

  const editTask = (id, newDescription) => {
    setListTasks((prevListTasks) => prevListTasks.map((task) => {
      if (task.id === id) {
        return { ...task, description: newDescription };
      }
      return task;
    }));
  };

  return (
    <>
      <TaskForm addTask={ addTask } />
      <TaskList
        listTasks={ listTasks }
        removeTask={ removeTask }
        toggleTaskDone={ toggleTaskDone }
        editTask={ editTask }
      />
    </>
  );
}

export default TodoList;
