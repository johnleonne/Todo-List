import React, { useState } from 'react';
import PropTypes from 'prop-types';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
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
