import React from 'react';

function TodoList() {
  return (
    <>
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        id="AddTask"
        placeholder="adicione uma tarefa"
      />
      <button type="button">Adicionar</button>
    </>
  );
}

export default TodoList;
