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

  return (
    <>
      <TaskForm addTask={ addTask } />
      <TaskList listTasks={ listTasks } />
    </>
  );
}

export default TodoList;
