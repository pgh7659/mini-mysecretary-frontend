import React from 'react';
import { createGlobalStyle } from 'styled-components';
import CalendarContainer from './containers/CalendarContainer';
import TodoContainer from './containers/TodoContainer';
import { CalendarProvider } from './context/calendar/CalendarContext';
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
    <>
      <CalendarProvider>
        <TodoProvider>
          <GlobalStyle />
          <TodoContainer />
        </TodoProvider>

        <CalendarContainer />
      </CalendarProvider>
      {/* <Menu /> */}
      {/* <Hello text="Hello React!" color="red" /> */}
      {/* <Hello color="blue" visible={showable}/> */}
      {/* <Choice name="showhide" mapList={[{text:"SHOW", value:true}, {text:"HIDE", value:false}]} clickHandler={showableHandler}/> */}
    </>
  );
}

export default App;
