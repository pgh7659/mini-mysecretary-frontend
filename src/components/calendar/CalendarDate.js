import React from 'react';

function CalendarDate({ dateList }) {
  return (
    <div className="calendar-date-list">
      {dateList.map((week) => {
        return week.map((date) => (
          <div className="calendar-date-wrapper">
            <span className="calendar-date">{date > 0 ? date : ''}</span>
          </div>
        ));
      })}
    </div>
  );
}

export default CalendarDate;
