import React, { createContext, useContext, useReducer } from 'react';

function todoReducer(state, action) {
  switch (action.type) {
    case 'GET_LIST':
      return action.todos;
    case 'CREATE':
      return state.concat({ ...action.todo, done: false });
    case 'TOGGLE':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case 'REMOVE':
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, []);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

// custom Hook
function CheckContext(context) {
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }

  return useContext(context);
}
export function useTodoState() {
  return CheckContext(TodoStateContext);
}
export function useTodoDispatch() {
  return CheckContext(TodoDispatchContext);
}
