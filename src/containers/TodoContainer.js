import React from 'react';
import TodoCreate from '../components/todo/TodoCreate';
import TodoHead from '../components/todo/TodoHead';
import TodoList from '../components/todo/TodoList';
import {
  TodoHeaderTemplate,
  TodoSectionTemplate,
} from '../components/todo/TodoTemplate';

function TodoContainer() {
  return (
    <>
      <TodoHeaderTemplate>
        <TodoHead />
      </TodoHeaderTemplate>
      <TodoSectionTemplate>
        <TodoList />
        <TodoCreate />
      </TodoSectionTemplate>
    </>
  );
}

export default TodoContainer;
