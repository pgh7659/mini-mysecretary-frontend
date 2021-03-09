import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { useTodoDispatch } from '../../context/todo/TodoContext';
import todoService from '../../lib/axios/service/todoService';

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px; solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Content = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

function TodoItem({ id, done, title }) {
  const dispatch = useTodoDispatch();
  const onToggle = async () => {
    console.log('toggle');
    console.log(done);
    const response = await todoService.updateDone(id, !done);
    console.log(response);
    if (response.status === 200) {
      dispatch({ type: 'TOGGLE', id });
    }
  };
  const onRemove = async () => {
    const response = await todoService.delete(id);
    console.log(response);
    if (response.status === 200) {
      dispatch({ type: 'REMOVE', id });
    }
  };

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Content done={done}>{title}</Content>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default React.memo(TodoItem);
