import React, { useState } from 'react';
import PropTypes from 'prop-types';

function TaskForm({ addTask }) {
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;
    addTask(description);
    setDescription('');
  };

  const handleDescriptions = ({ target: { value } }) => {
    setDescription(value);
  };

  return (
    <form onSubmit={ handleSubmit }>

      <h1>Lista de Tarefas</h1>

      <input
        type="text"
        id="AddTask"
        placeholder="adicione uma tarefa"
        value={ description }
        onChange={ handleDescriptions }
      />

      <button type="submit">Adicionar</button>

    </form>
  );
}

export default TaskForm;

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};
