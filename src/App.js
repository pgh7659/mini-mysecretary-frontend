import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import AuthRouter from './components/AuthRouter';
import LoginCallback from './components/login/LoginCallback';
import LoginContainer from './containers/LoginContainer';
import TodoContainer from './containers/TodoContainer';
import { CalendarProvider } from './context/calendar/CalendarContext';
import { LoadingProvider } from './context/loading/LoadingContext';
import { TodoProvider } from './context/todo/TodoContext';

function App() {
  const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;
  return (
    <LoadingProvider>
      <CalendarProvider>
        <TodoProvider>
          <GlobalStyle />
          <BrowserRouter>
            <Switch>
              <AuthRouter path="/todo" component={TodoContainer} />
              <Route exact path="/login" component={LoginContainer} />
              <Route path="/login/callback" component={LoginCallback} />
              <Redirect to="/todo" />
            </Switch>
          </BrowserRouter>
        </TodoProvider>
      </CalendarProvider>
    </LoadingProvider>
  );
}

export default App;
