import styled from "styled-components";

export const FormContainer = styled.form`
  display: grid;
  width: 100%;
  grid-template-rows: repeat(2, 40px);
  grid-template-columns: repeat(2, 1fr) 40px;
  grid-gap: 8px;
  grid-template-areas:
    "input input input"
    "select1 select2 btn";
  input,
  select {
    border-radius: 6px;
    width: 100%;
  }
  input {
    grid-area: input;
    padding: 8.5px 24px;
    font-size: 16px;
    line-height: 40px;
    ::placeholder {
      font-weight: 400;
      font-size: 16px;
      color: #d2d2d2;
      font-family: "Noto Sans TC", sans-serif;
    }
  }
  select {
    position: relative;
    padding: 8px 5px 8px 16px;
    font-size: 16px;
    font-weight: 400;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-family: "Noto Sans TC", sans-serif;
  }
`;

export const SubmitButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 6px;
  background-color: #ff1d6c;
  grid-area: btn;
  border: none;
`;
