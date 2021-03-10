import React, { useState } from 'react';
import {
  useCalendarDispatch,
  useCalendarState,
} from '../../context/calendar/CalendarContext';
import { calendarUtils } from '../../lib/utils/calendarUtils';
import CalendarDate from './CalendarDate';
import closeImg from './ico_close.png';

function CalendarHead() {
  const { selectedYear, selectedMonth } = useCalendarState();
  const [monthValue, setMonthValue] = useState(selectedMonth);
  const calendarDispatch = useCalendarDispatch();
  const closeModal = () => {
    calendarDispatch({ type: 'TOGGLE' });
  };

  const clickForNextMonth = () => {
    setMonthValue(monthValue + 1);
  };

  const clickForPrevMonth = () => {
    setMonthValue(monthValue - 1);
  };

  const dateList = calendarUtils.getDateListForTheMonth(
    selectedYear,
    monthValue
  );

  return (
    <>
      <div className="calendar-header">
        <div className="calendar-close">
          <button onClick={closeModal}><img src={closeImg} alt="close"/></button>
        </div>
        <div className="calendar-selector">
          <span className="calendar-date-change" onClick={clickForPrevMonth}>
            {'<'}
          </span>
          <span>
            {calendarUtils.getFormattedDate(selectedYear, monthValue)}
          </span>
          <span className="calendar-date-change" onClick={clickForNextMonth}>
            {'>'}
          </span>
        </div>
      </div>
      <div className="calendar-date-list">
        {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
          <div className="calendar-date-wrapper" key={day}>
            <span className="calendar-date">{day}</span>
          </div>
        ))}
      </div>

      <CalendarDate dateList={dateList} />
    </>
  );
}

export default CalendarHead;
