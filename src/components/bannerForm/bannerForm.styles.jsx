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
    width: 100%;
    grid-area: input;
  }
`;

export const SubmitButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 6px;
  background-color: #ff1d6c;
  grid-area: btn;
`;
