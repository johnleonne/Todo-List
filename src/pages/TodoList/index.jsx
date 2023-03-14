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
    localStorage.setItem(
      'tasks',
      JSON.stringify(listTasks.filter((task) => task.id !== id)),
    );
  };

  const toggleTaskDone = (id) => {
    setListTasks((prevListTasks) => prevListTasks.map((task) => {
      if (task.id === id) {
        const updatedTask = { ...task, done: !task.done };
        localStorage.setItem(
          'tasks',
          JSON.stringify(prevListTasks.map((t) => (t.id === id ? updatedTask : t))),
        );
        return updatedTask;
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

  const moveTaskUp = (id) => {
    const index = listTasks.findIndex((task) => task.id === id);
    if (index > 0) {
      const newTasks = [...listTasks];
      newTasks[index] = listTasks[index - 1];
      newTasks[index - 1] = listTasks[index];
      setListTasks(newTasks);
      localStorage.setItem('tasks', JSON.stringify(newTasks));
    }
  };

  const moveTaskDown = (id) => {
    const index = listTasks.findIndex((task) => task.id === id);
    if (index < listTasks.length - 1) {
      const newTasks = [...listTasks];
      newTasks[index] = listTasks[index + 1];
      newTasks[index + 1] = listTasks[index];
      setListTasks(newTasks);
      localStorage.setItem('tasks', JSON.stringify(newTasks));
    }
  };

  return (
    <Container className="todo-list-container" maxWidth="md">
      <TaskForm addTask={ addTask } />
      <TaskList
        listTasks={ listTasks }
        removeTask={ removeTask }
        toggleTaskDone={ toggleTaskDone }
        editTask={ editTask }
        moveTaskUp={ moveTaskUp }
        moveTaskDown={ moveTaskDown }
      />
    </Container>
  );
}

export default TodoList;
