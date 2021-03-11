import React from 'react';

function CalendarDate({ dateList, selectedDate, onClick }) {
  return (
    <div className="calendar-date-list">
      {dateList.map((week) => {
        return week.map((date, index) => (
          <div
            className={`calendar-date-wrapper ${date > 0 ? 'date' : ''}`}
            onClick={date > 0 ? () => onClick(date) : null}
            key={date > 0 ? date : week + '' + index}
          >
            <span>{date > 0 ? date : ''}</span>
          </div>
        ));
      })}
    </div>
  );
}

export default CalendarDate;
