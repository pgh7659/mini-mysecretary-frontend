import React from 'react';
import { createGlobalStyle } from 'styled-components';
import CalendarContainer from './containers/CalendarContainer';
import TodoContainer from './containers/TodoContainer';
import { CalendarProvider } from './context/calendar/CalendarContext';
import { LoadingProvider } from './context/loading/LoadingContext';
import { TodoProvider } from './context/todo/TodoContext';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  // const [showable, setShowable] = useState(false);
  // const showableHandler = (e) => {
  //   setShowable(Boolean(e.target.value === 'true'));
  // }

  // const [visiblePage, setVisiblePage] = useState();
  // const changeVisiblePage = () => {
  //   setVisiblePage()
  // }

  return (
    <LoadingProvider>
      <CalendarProvider>
        <TodoProvider>
          <GlobalStyle />
          <TodoContainer />
        </TodoProvider>
        <CalendarContainer />
      </CalendarProvider>
    </LoadingProvider>
  );
}

export default App;
