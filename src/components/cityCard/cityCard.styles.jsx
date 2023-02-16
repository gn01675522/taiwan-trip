import styled from "styled-components";

export const CityCardOutline = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-image: ${({ cityImg }) => {
    return `
    url(${cityImg})
    `;
  }};
`;

export const BlurBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(14, 12, 13, 0.3);
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: white;
`;
