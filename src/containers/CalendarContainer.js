import React from 'react';
import CalendarHead from '../components/calendar/CalendarHead';
import CalendarTemplate from '../components/calendar/CalendarTemplate';
import { useCalendarState } from '../context/calendar/CalendarContext';

function CalendarContainer() {
  const { open } = useCalendarState();
  return (
    <>
      {open ? (
        <CalendarTemplate>
          <CalendarHead />
        </CalendarTemplate>
      ) : null}
    </>
  );
}

export default CalendarContainer;
