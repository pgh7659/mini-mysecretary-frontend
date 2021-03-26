import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import styled, { css } from 'styled-components';
import { useCalendarState } from '../../context/calendar/CalendarContext';
import { useTodoDispatch } from '../../context/todo/TodoContext';
import todoService from '../../lib/axios/service/todoService';
import { calendarUtils } from '../../lib/utils/calendarUtils';

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;

  transition: 0.125s all ease-in;
  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;
const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;
const InsertForm = styled.div`
  background: #f8f9fa;
  padding-left: 10px;
  padding-top: 32px;
  padding-right: 10px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;
const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 80%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;
const InsertButton = styled.button`
  color: #ffffff;
  height: 47px;
  background-color: #20c997;
  padding: 12px;
  border-radius: 4px;
  width: 20%;
  outline: none;
  border: 1px solid #dee2e6;
  font-size: 18px;
  &:hover {
    background: #228be6;
  }
`;

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const dispatch = useTodoDispatch();
  const { selectedDate } = useCalendarState();

  const onToggle = () => setOpen(!open);
  const onChange = (e) => setValue(e.target.value);
  const onCreate = async (e) => {
    if (e.type === 'keypress' && e.key !== 'Enter') {
      return;
    } else if (!value.trim()) {
      return;
    }

    const todo = {
      title: value,
      date: calendarUtils.getFormattedDateForFrca(selectedDate),
    };

    const response = await todoService.save(todo);
    if (response.status === 200) {
      dispatch({
        type: 'CREATE',
        todo: { ...todo, id: response.data },
      });

      setValue('');
      setOpen(false);
    }
  };

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm>
            <Input
              autoFocus
              placeholder="내용을 입력 후, Enter를 누르세요."
              onChange={onChange}
              onKeyPress={onCreate}
              value={value}
            />
            <InsertButton onClick={onCreate}>Enter</InsertButton>
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default TodoCreate;
