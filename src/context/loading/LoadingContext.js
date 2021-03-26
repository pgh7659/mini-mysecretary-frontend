import React, { createContext, useContext, useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return { ...state, load: true };
    case 'REMOVE':
      return { ...state, load: false };
    default:
      throw new Error(`unexpected type: ${action.type}`);
  }
}

const LoadingStateContext = createContext();
const LoadingDispatchContext = createContext();

export function LoadingProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { load: false });
  return (
    <LoadingStateContext.Provider value={state}>
      <LoadingDispatchContext.Provider value={dispatch}>
        {children}
      </LoadingDispatchContext.Provider>
    </LoadingStateContext.Provider>
  );
}

// custom Hook
function CheckContext(context) {
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }

  return useContext(context);
}
export function useLoadingState() {
  return CheckContext(LoadingStateContext);
}
export function useLoadingDispatch() {
  return CheckContext(LoadingDispatchContext);
}
