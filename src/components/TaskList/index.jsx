import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Tasks';

function TaskList({ listTasks, removeTask, toggleTaskDone }) {
  return (
    <ul>
      {listTasks.map((task) => (
        <Task
          key={ task.id }
          task={ task }
          removeTask={ removeTask }
          toggleTaskDone={ toggleTaskDone }
        />
      ))}
    </ul>
  );
}

export default TaskList;

TaskList.propTypes = {
  listTasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  removeTask: PropTypes.func.isRequired,
  toggleTaskDone: PropTypes.func.isRequired,
};
