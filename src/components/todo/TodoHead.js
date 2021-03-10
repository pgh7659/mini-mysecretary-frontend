import React from 'react';
import styled from 'styled-components';
import { useCalendarDispatch } from '../../context/calendar/CalendarContext';
import { useTodoState } from '../../context/todo/TodoContext';

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
    cursor: pointer;
    text-align: center;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
    text-align: center;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

// toLocaleDateString 활용하자!!
// function getFormatDate(today) {
//   const year = today.getFullYear();
//   let month = today.getMonth();
//   month = month > 8 ? month + 1 : '0' + (month + 1);

//   let date = today.getDate();
//   date = date < 10 ? '0' + date : date;

//   return year + '-' + month + '-' + date;
// }

// function getDayKorean(date) {
//   return ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'][date.getDay()];
// }

const today = new Date();
const dateStringKo = today.toLocaleDateString('ko-KR', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
const dayNameKo = today.toLocaleDateString('ko-KR', {
  weekday: 'long',
});

function TodoHead() {
  const todoState = useTodoState();
  const undoneTodos = todoState.filter((todo) => !todo.done);

  const calendarDispatch = useCalendarDispatch();
  const onClick = () => {
    calendarDispatch({ type: 'TOGGLE' });
  };

  return (
    <TodoHeadBlock>
      <h1 onClick={onClick}>{dateStringKo}</h1>
      <div className="day">{dayNameKo}</div>
      <div className="tasks-left">{`할 일 ${undoneTodos.length}개 남음`}</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
