import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  width: 512px;
  height: 768px;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rbga(0, 0, 0, 0.04);

  margin: 0 auto;

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

const TodoHeaderTemplateBlock = styled.header`
  width: 512px;
  height: 218px;

  position: relative;
  background: white;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  box-shadow: 0 0 8px 0 rbga(0, 0, 0, 0.04);

  margin: 0 auto;

  margin-top: 96px;
  display: flex;
  flex-direction: column;
`;

const TodoSectionTemplateBlock = styled.section`
  width: 512px;
  height: 550px;

  position: relative;
  background: white;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  box-shadow: 0 0 8px 0 rbga(0, 0, 0, 0.04);

  margin: 0 auto;

  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

function TodoHeaderTemplate({ children }) {
  return <TodoHeaderTemplateBlock>{children}</TodoHeaderTemplateBlock>;
}

function TodoSectionTemplate({ children }) {
  return <TodoSectionTemplateBlock>{children}</TodoSectionTemplateBlock>;
}

export { TodoTemplate, TodoHeaderTemplate, TodoSectionTemplate };
