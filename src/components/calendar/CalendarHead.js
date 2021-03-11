import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import {
  useCalendarDispatch,
  useCalendarState,
} from '../../context/calendar/CalendarContext';
import { calendarUtils } from '../../lib/utils/calendarUtils';
import CalendarDate from './CalendarDate';

function CalendarHead() {
  const { selectedDate } = useCalendarState();
  const selectedYear = selectedDate.getFullYear();
  const selectedMonth = selectedDate.getMonth();

  const calendarDispatch = useCalendarDispatch();
  const closeModal = () => {
    calendarDispatch({ type: 'TOGGLE' });
  };

  const [monthValue, setMonthValue] = useState(0);
  const clickForNextMonth = () => {
    setMonthValue(monthValue + 1);
  };

  const clickForPrevMonth = () => {
    setMonthValue(monthValue - 1);
  };

  const dateList = calendarUtils.getDateListForTheMonth(
    selectedYear,
    selectedMonth + monthValue,
  );

  const onClickToCalendarDate = (date) => {
    calendarDispatch({
      type: 'SELECT_DATE',
      dateValue: new Date(selectedYear, selectedMonth + monthValue, date),
    });

    calendarDispatch({ type: 'TOGGLE' });
  };

  return (
    <>
      <div className="calendar-header">
        <div className="calendar-close">
          <button onClick={closeModal}>
            <MdAdd />
          </button>
        </div>
        <div className="calendar-selector">
          <div className="side-btns">
            <span className="side-btns-left" onClick={clickForPrevMonth}>
              <i className="fas fa-angle-left"></i>
            </span>
          </div>
          <h3>
            {calendarUtils.getFormattedYearMonthKokr(
              selectedYear,
              selectedMonth + monthValue,
            )}
          </h3>
          <div className="side-btns">
            <span className="side-btns-right" onClick={clickForNextMonth}>
              <i className="fas fa-angle-right"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="calendar-date-list">
        {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
          <div className="calendar-date-wrapper" key={day}>
            <span className="calendar-date">{day}</span>
          </div>
        ))}
      </div>

      <CalendarDate
        dateList={dateList}
        onClick={onClickToCalendarDate}
        selectedDate={selectedDate.getDate()}
      />
    </>
  );
}

export default CalendarHead;
