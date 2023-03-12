import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Task({ task, removeTask, toggleTaskDone, editTask }) {
  const [editing, setEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleRemoveTask = () => {
    removeTask(task.id);
  };

  const handleCheckTask = () => {
    toggleTaskDone(task.id);
  };

  const handleEditTask = () => {
    setEditing(true);
  };

  const handleSalveEditClick = () => {
    editTask(task.id, newDescription);
    setEditing(false);
  };

  const handleCancelEditClick = () => {
    setNewDescription(task.description);
    setEditing(false);
  };

  const handleNewDescription = ({ target: { value } }) => {
    setNewDescription(value);
  };

  return (
    <li>
      <input type="checkbox" checked={ task.done } onChange={ handleCheckTask } />

      {editing ? (
        <>
          <input type="text" value={ newDescription } onChange={ handleNewDescription } />
          <button type="button" onClick={ handleCancelEditClick }>
            cancelar
          </button>

          <button type="button" onClick={ handleSalveEditClick }>
            salvar
          </button>
        </>
      ) : (
        <>
          <span>{task.description}</span>
          <div>
            <button type="button" onClick={ handleEditTask }>
              editar
            </button>
            <button type="button" onClick={ handleRemoveTask }>
              remover
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default Task;

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  removeTask: PropTypes.func.isRequired,
  toggleTaskDone: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
};
