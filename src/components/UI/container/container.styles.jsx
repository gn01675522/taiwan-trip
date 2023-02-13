import styled from "styled-components";

const baseOutline = styled.div`
  display: grid;
  grid-gap: 60px;
  background-color: #e5e5e5;
`;

export const ContainerOutlineInHome = styled(baseOutline)`
  grid-template-rows: repeat(3, auto);
  padding: 65px 109px 60px 109px;
`;

export const ContainerOutlineInFood = styled(baseOutline)`
  grid-template-rows: repeat(2, auto);
  padding: 90px 109px 40px 105px;
`;

export const ContainerOutlineInTraffic = styled(baseOutline)`
  display: block;
  padding: 81px 163px 84px 163px;
  :before {
    content: "*每隔5秒自動更新";
    display: block;
    position: relative;
    font-size: 16px;
    font-weight: 400;
    color: #ff1d6c;
    margin-bottom: 12px;
    text-align: end;
  }
`;
