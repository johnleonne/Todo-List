import React from 'react';
import PropTypes from 'prop-types';
import { List } from '@mui/material';
import Task from '../Tasks';

function TaskList({ listTasks, removeTask, toggleTaskDone, editTask }) {
  return (
    <List sx={ { width: '100%' } }>
      {listTasks.map((task) => (
        <Task
          key={ task.id }
          task={ task }
          removeTask={ removeTask }
          toggleTaskDone={ toggleTaskDone }
          editTask={ editTask }
        />
      ))}
    </List>
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
  editTask: PropTypes.func.isRequired,
};
