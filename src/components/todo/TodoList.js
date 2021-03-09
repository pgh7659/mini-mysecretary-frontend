import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useTodoDispatch, useTodoState } from '../../context/todo/TodoContext';
import todoService from '../../lib/axios/service/todoService';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px; 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  const dispatch = useTodoDispatch();
  useEffect(() => {
    const getList = async () => {
      const response = await todoService.getList();
      if (response.status === 200) {
        dispatch({ type: 'GET_LIST', todos: response.data });
      }
    };

    getList();
  }, []);

  const todos = useTodoState();

  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          done={todo.done}
        />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;
