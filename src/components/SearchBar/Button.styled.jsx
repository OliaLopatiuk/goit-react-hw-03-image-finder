import styled from 'styled-components';

export const Button = styled.button`
  width: 24px;
  height: 24px;
  box-sizing: border-box;
  display: inline-block;
  padding: 2px;
  top: 4px;
  right: 3px;
  position: absolute;
  border: 1px solid rgb(52, 51, 51);
  border-radius: 4px;

  :hover {
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
  }
`;
