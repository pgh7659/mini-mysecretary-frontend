import React from 'react';
import CalendarHead from '../components/calendar/CalendarHead';
import CalendarTemplate from '../components/calendar/CalendarTemplate';
import TodoCreate from '../components/todo/TodoCreate';
import TodoHead from '../components/todo/TodoHead';
import TodoList from '../components/todo/TodoList';
import {
  TodoHeaderTemplate,
  TodoSectionTemplate,
} from '../components/todo/TodoTemplate';
import { useCalendarState } from '../context/calendar/CalendarContext';

function TodoContainer() {
  const { open } = useCalendarState();
  return (
    <>
      <TodoHeaderTemplate>
        <TodoHead />
      </TodoHeaderTemplate>
      <TodoSectionTemplate>
        <TodoList />
        <TodoCreate />
      </TodoSectionTemplate>
      {open ? (
        <CalendarTemplate>
          <CalendarHead />
        </CalendarTemplate>
      ) : null}
    </>
  );
}

export default TodoContainer;
