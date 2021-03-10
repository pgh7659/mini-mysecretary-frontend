import React from 'react';
import CalendarDate from '../components/calendar/CalendarDate';
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
