import styled from "styled-components";

export const NormalCardOutline = styled.div`
  outline: 1px solid darkblue;
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 7px 8px 7px 9px;
  box-shadow: 0px 2px 4px rgba(13, 11, 12, 0.2);
  grid-area: ${(props) => `div${props.gridArea}`};
`;
