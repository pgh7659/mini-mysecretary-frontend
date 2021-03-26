import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useCalendarState } from '../../context/calendar/CalendarContext';
import {
  useLoadingDispatch,
  useLoadingState,
} from '../../context/loading/LoadingContext';
import { useTodoDispatch, useTodoState } from '../../context/todo/TodoContext';
import todoService from '../../lib/axios/service/todoService';
import { calendarUtils } from '../../lib/utils/calendarUtils';
import Loading from '../loading/Loading';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  const { selectedDate } = useCalendarState();
  const todoDispatch = useTodoDispatch();
  const { load } = useLoadingState();
  const loadingDispatch = useLoadingDispatch();

  useEffect(() => {
    const getList = async () => {
      loadingDispatch({ type: 'CREATE' });
      const response = await todoService.getList(
        calendarUtils.getFormattedDateForFrca(selectedDate),
      );

      if (response.status === 200) {
        todoDispatch({ type: 'GET_LIST', todos: response.data });
        loadingDispatch({ type: 'REMOVE' });
      }
    };

    getList();
  }, [selectedDate]);

  const todos = useTodoState();

  return (
    <>
      {load ? (
        <Loading />
      ) : (
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
      )}
    </>
  );
}

export default TodoList;
