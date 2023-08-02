import styled from '@emotion/styled';

export const FormDiv = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  border: none;
  width: 250px;
  height: 50px;

  margin: 0 auto;
  border-radius: 15px;
  cursor: pointer;
  background-color: white;
`;
