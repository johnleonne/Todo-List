import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Paper, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';

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
    <Paper sx={ { textAlign: 'center', padding: '24px', margin: '12px 0 ' } }>
      <form onSubmit={ handleSubmit }>
        <Typography variant="h4" style={ { marginBottom: '12px' } }>
          Lista de Tarefas
        </Typography>
        <Container sx={ { display: 'flex', justifyContent: 'center' } }>
          <TextField
            id="outlined-basic"
            label="Adicione uma tarefa"
            variant="outlined"
            value={ description }
            onChange={ handleDescriptions }
            sx={ { width: '100%' } }
          />

          <Button
            type="submit"
            variant="text"
            sx={ { marginLeft: '12px', padding: '0 24px ' } }
          >
            Adicionar
          </Button>
        </Container>
      </form>
    </Paper>
  );
}

export default TaskForm;

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};
