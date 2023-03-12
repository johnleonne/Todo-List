import React from 'react';
import PropTypes from 'prop-types';

function Task({ task, removeTask }) {
  const handleRemoveTask = () => {
    removeTask(task.id);
  };

  return (
    <li>
      <input type="checkbox" />
      <span>{task.description}</span>
      <div>
        <button type="button"> editar</button>
        <button type="button" onClick={ handleRemoveTask }>
          remover
        </button>
      </div>
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
};
