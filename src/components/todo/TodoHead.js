import React from 'react';
import styled from 'styled-components';
import {
  useCalendarDispatch,
  useCalendarState,
} from '../../context/calendar/CalendarContext';
import { useTodoState } from '../../context/todo/TodoContext';

const TodoHeaderBlock = styled.div`
  height: 100%;
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  flex-direction: row;

  .content-wrap {
    width: 100%;

    h1 {
      margin: 0;
      font-size: 36px;
      color: #343a40;
      cursor: pointer;
      text-align: center;
    }

    .date {
      padding: 0 20px;
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
  }

  .side-btns {
    position: relative;
    width: 10%;
    height: 100%;

    span {
      cursor: pointer;
      position: absolute;
      top: 18%;
      transform: translatey(-50%);
      opacity: 0.5;
      padding: 1px 13px;
      border-radius: 50px;
      font-size: 40px;
    }
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

function TodoHead() {
  const todoState = useTodoState();
  const undoneTodos = todoState.filter((todo) => !todo.done);

  const { selectedDate } = useCalendarState();
  const dateStringKo = selectedDate.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const dayNameKo = selectedDate.toLocaleDateString('ko-KR', {
    weekday: 'long',
  });

  const calendarDispatch = useCalendarDispatch();

  const onClick = () => {
    calendarDispatch({ type: 'TOGGLE' });
  };

  const onChangeDate = (e) => {
    const changeTypes = e.target.classList[e.target.classList.length - 1].split(
      '-',
    );
    switch (changeTypes[changeTypes.length - 1]) {
      case 'left':
        calendarDispatch({
          type: 'CHANGE_DATE',
          dateValue: -1,
        });
        break;
      case 'right':
        calendarDispatch({
          type: 'CHANGE_DATE',
          dateValue: 1,
        });
        break;
      default:
        throw new Error('not exist type.');
    }
  };

  return (
    <TodoHeaderBlock>
      <div className="side-btns">
        <span className="side-btns-left" onClick={onChangeDate}>
          <i className="fas fa-angle-left"></i>
        </span>
      </div>
      <div className="content-wrap">
        <div className="date">
          <h1 onClick={onClick}>{dateStringKo}</h1>
        </div>
        <div className="day">{dayNameKo}</div>
        <div className="tasks-left">{`할 일 ${undoneTodos.length}개 남음`}</div>
      </div>
      <div className="side-btns">
        <span className="side-btns-right" onClick={onChangeDate}>
          <i className="fas fa-angle-right"></i>
        </span>
      </div>
    </TodoHeaderBlock>
  );
}

export default TodoHead;
