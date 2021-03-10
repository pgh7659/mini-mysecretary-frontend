import React from 'react';
import './Calendar.scss';

function CalendarTemplate({ children }) {
  return (
    <div className="modal">
      <div className="calendar-modal">{children}</div>
    </div>
  );
}

export default CalendarTemplate;
