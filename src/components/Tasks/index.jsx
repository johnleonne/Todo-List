import React, { useState } from 'react';
import PropTypes from 'prop-types';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {
  Container,
  Checkbox,
  IconButton,
  ListItem,
  TextField,
  ListItemText,
  Paper,
  Divider,
} from '@mui/material';

function Task({ task, removeTask, toggleTaskDone, editTask, moveTaskUp, moveTaskDown }) {
  const [editing, setEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);
  const [hovering, setHovering] = useState(false);

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

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

  const handleSalveEditEnter = (event) => {
    if (event.key === 'Enter') {
      handleSalveEditClick();
    }
  };

  const handleCancelEditClick = () => {
    setNewDescription(task.description);
    setEditing(false);
  };

  const handleNewDescription = ({ target: { value } }) => {
    setNewDescription(value);
  };

  const handleMoveTaskUp = () => {
    moveTaskUp(task.id);
  };

  const handleMoveTaskDown = () => {
    moveTaskDown(task.id);
  };

  return (
    <div style={ { display: 'flex' } }>
      <div style={ { minWidth: '100%' } }>
        <Paper>
          <ListItem sx={ { margin: '8px 0 ' } }>
            <Checkbox
              edge="start"
              checked={ task.done }
              onChange={ handleCheckTask }
              color="default"
              sx={ {
                margin: '0 8px',
              } }
              disabled={ !!editing }
            />

            {editing ? (
              <>
                <TextField
                  id="standard-basic"
                  label="Edite a sua tarefa"
                  variant="standard"
                  value={ newDescription }
                  onChange={ handleNewDescription }
                  onKeyDown={ handleSalveEditEnter }
                  sx={ {
                    minWidth: '80%',
                  } }
                />

                <Container
                  sx={ {
                    display: 'flex',
                    justifyContent: 'space-between',
                  } }
                >
                  <IconButton aria-label="cancel" onClick={ handleCancelEditClick }>
                    <CancelIcon />
                  </IconButton>

                  <Divider orientation="vertical" variant="middle" flexItem />

                  <IconButton aria-label="save" onClick={ handleSalveEditClick }>
                    <CheckCircleIcon />
                  </IconButton>
                </Container>
              </>
            ) : (
              <>
                <ListItemText
                  style={ {
                    minWidth: '80%',
                    textDecoration: task.done ? 'line-through' : 'none',
                    opacity: task.done ? '0.2' : '1',
                  } }
                >
                  {task.description}
                </ListItemText>

                <Container
                  sx={ {
                    display: 'flex',
                    justifyContent: 'space-between',
                  } }
                >
                  <IconButton aria-label="edit" onClick={ handleEditTask }>
                    <EditIcon />
                  </IconButton>

                  <Divider orientation="vertical" variant="middle" flexItem />

                  <IconButton aria-label="delete" onClick={ handleRemoveTask }>
                    <DeleteForeverIcon />
                  </IconButton>
                </Container>
              </>
            )}
          </ListItem>
        </Paper>
      </div>
      <div
        onMouseEnter={ handleMouseEnter }
        onMouseLeave={ handleMouseLeave }
        style={ {
          opacity: hovering ? '0.6' : '0.1',
          marginLeft: '8px',
          transition: 'opacity 0.5s ease-in-out',
        } }
      >
        <IconButton aria-label="move-up" onClick={ handleMoveTaskUp }>
          <ArrowUpwardIcon fontSize="small" />
        </IconButton>

        <Divider orientation="horizontal" variant="middle" flexItem />

        <IconButton aria-label="move-down" onClick={ handleMoveTaskDown }>
          <ArrowDownwardIcon fontSize="small" />
        </IconButton>
      </div>
    </div>
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
  moveTaskUp: PropTypes.func.isRequired,
  moveTaskDown: PropTypes.func.isRequired,
};
