import React, { useEffect } from 'react';
import TodoCreate from '../components/todo/TodoCreate';
import TodoHead from '../components/todo/TodoHead';
import TodoList from '../components/todo/TodoList';
import TodoTemplate from '../components/todo/TodoTemplate';
import testService from '../lib/axios/service/testService';

function TodoContainer() {
  useEffect(() => {
    const testApi = async () => {
      const response = await testService.getList();
      console.log(response);
    }

    testApi();
  }, [])
  return (
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
  )
}

export default TodoContainer;