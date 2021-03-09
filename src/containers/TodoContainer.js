import React from 'react';
import TodoCreate from '../components/todo/TodoCreate';
import TodoHead from '../components/todo/TodoHead';
import TodoList from '../components/todo/TodoList';
import TodoTemplate from '../components/todo/TodoTemplate';

function TodoContainer() {
  return (
    <TodoTemplate>
      <TodoHead />
      <TodoList />
      <TodoCreate />
    </TodoTemplate>
  );
}

export default TodoContainer;
