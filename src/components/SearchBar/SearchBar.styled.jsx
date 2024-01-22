import styled from 'styled-components';

export const Header = styled.header`
  background-color: rgb(123, 89, 192);
  height: 56px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
`;

export const Input = styled.input`
  font-size: 16px;
  height: 28px;
  width: 250px;
  padding-left: 8px;
  border-radius: 4px;
  border: 1px solid rgb(52, 51, 51);
  outline: none;
`;

export const Form = styled.form`
  box-sizing: border-box;
  position: relative;
`;
