import React from 'react';
import PropTypes from 'prop-types';

function Task({ task }) {
  return (
    <li>
      <input type="checkbox" />
      <span>{task.description}</span>
      <div>
        <button type="button"> editar</button>
        <button type="button"> remover</button>
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
};
