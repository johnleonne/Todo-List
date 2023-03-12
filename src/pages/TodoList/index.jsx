import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TaskForm from '../../components/TaskForm';
import TaskList from '../../components/TaskList';

function TodoList() {
  const [listTasks, setListTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setListTasks(storedTasks);
    }
  }, []);

  const addTask = (description) => {
    const newTask = {
      id: uuidv4(),
      description,
      done: false,
    };

    setListTasks([...listTasks, newTask]);
    localStorage.setItem('tasks', JSON.stringify([...listTasks, newTask]));
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
        const updatedTask = { ...task, description: newDescription };
        localStorage.setItem(
          'tasks',
          JSON.stringify(prevListTasks.map((t) => (t.id === id ? updatedTask : t))),
        );
        return updatedTask;
      }
      return task;
    }));
  };

  return (
    <Container maxWidth="md">
      <TaskForm addTask={ addTask } />
      <TaskList
        listTasks={ listTasks }
        removeTask={ removeTask }
        toggleTaskDone={ toggleTaskDone }
        editTask={ editTask }
      />
    </Container>
  );
}

export default TodoList;
