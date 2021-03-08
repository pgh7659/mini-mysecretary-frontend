import React, { createContext, useContext, useReducer, useRef } from 'react';

const initialTodos = [
  {id: 0, content: '할일 1', done: true},
  {id: 1, content: '할일 2', done: true},
  {id: 2, content: '할일 3', done: false},
  {id: 3, content: '할일 4', done: true},
  {id: 4, content: '할일 5', done: false},
];

function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat({...action.todo, done: false});
    case 'TOGGLE':
      return state.map(todo => todo.id === action.id ? {...todo, done: !todo.done} : todo);
    case 'REMOVE':
      console.log(action);
      return state.filter(todo => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
// 추후 api 연동 시 삭제
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [ state, dispatch] = useReducer(todoReducer, initialTodos);
  // 추후 api 연동 시 삭제
  const nextId = useRef(5);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

// custom Hook
function CheckContext(context) {
  if(!context) {
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
export function useTodoNextId() {
  return CheckContext(TodoNextIdContext);
}