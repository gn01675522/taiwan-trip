import styled from "styled-components";

export const SelectWrap = styled.div`
  position: relative;
  :after {
    content: "";
    position: absolute;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 5px 3px 0px 3px;
    border-color: black transparent transparent transparent;
    right: 9.5px;
    top: 50%;
    transform: translateY(-50%);
    grid-area: ${(props) => `select${props.gridArea}`};
  }
`;

export const SelectBar = styled.select`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 8px 5px 8px 16px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 400;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-family: "Noto Sans TC", sans-serif;
  border: none;
  box-shadow: 0px 2px 4px rgba(13, 11, 12, 0.2);
`;

export const Option = styled.option`
  ::hover {
    color: white;
    background-color: #ff1d6c;
  }
`;
