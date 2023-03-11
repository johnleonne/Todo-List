import React from 'react';
import PropTypes from 'prop-types';

function ListTasks({ listTasks }) {
  return (
    <ul>
      {listTasks.map((task) => (
        <li key={ task.id }>
          <input type="checkbox" />
          {task.description}
          <button type="button"> editar</button>
          <button type="button"> remover</button>
        </li>
      ))}
    </ul>
  );
}

export default ListTasks;

ListTasks.propTypes = {
  listTasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
};
