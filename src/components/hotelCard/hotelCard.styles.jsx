import styled from "styled-components";

export const HotelCardOutline = styled.div`
  display: grid;
  grid-template-rows: 137px 42px 16px;
  grid-gap: 10px;
  width: 100%;
  height: 100%;
`;

export const HotelImage = styled.img`
  width: 100%;
  height: 100%;
  ${({ imageUrl }) => {
    if (imageUrl) {
      return `
        background-image: url(${imageUrl});
        background-size: cover;
        background-position: center center;
        backgroud-repeat: no-repeat;
      `;
    }
    return `background-color: purple;`;
  }}
`;

export const HotelLocation = styled.div`
  width: 100%;
  height: 100%;
  font-size: 14px;
  font-weight: 400;
  color: #0d0b0c;
`;

export const HotelArea = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  font-weight: 300;
  color: #007350;
`;
