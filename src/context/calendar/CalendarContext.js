import React, { createContext, useContext, useReducer } from 'react';

const today = new Date();
const initialState = {
  open: false,
  selectedYear: today.getFullYear(),
  selectedMonth: today.getMonth(),
  selectedDate: today.getDate(),
  selectedDay: today.getDay(),
};

function calendarReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return { ...state, open: !state.open };
    case 'CHANGE_MONTH':
      return {
        ...state,
        selectedYear: action.selectedYear,
        selectedMonth: action.selectedMonth,
      };
    case 'CHANGE_DATE':
      return {
        ...state,
        selectedDate: action.selectedDate,
        selectedDay: action.selectedDate,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const CalendarStateContext = createContext();
const CalendarDispatchContext = createContext();

export function CalendarProvider({ children }) {
  const [state, dispatch] = useReducer(calendarReducer, initialState);

  return (
    <CalendarStateContext.Provider value={state}>
      <CalendarDispatchContext.Provider value={dispatch}>
        {children}
      </CalendarDispatchContext.Provider>
    </CalendarStateContext.Provider>
  );
}

// custom Hook
function CheckContext(context) {
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }

  return useContext(context);
}
export function useCalendarState() {
  return CheckContext(CalendarStateContext);
}
export function useCalendarDispatch() {
  return CheckContext(CalendarDispatchContext);
}
