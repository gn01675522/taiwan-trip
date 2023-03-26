import styled from "styled-components";

import { screenWide } from "../../../dummy_data/DUMMY_DATA";

const { pad, pc } = screenWide;

const baseOutline = styled.div`
  display: grid;
  grid-gap: 60px;
  background-color: #f6f7fb;
`;

export const ContainerOutlineInHome = styled(baseOutline)`
  grid-template-rows: repeat(3, auto);
  padding: 65px 109px 60px 109px;
  @media screen and (max-width: ${pc}) {
    padding: 0 65px 40px 65px;
  }
  @media screen and (max-width: ${pad}) {
    padding: 43px 26px 54px 26px;
  }
`;

export const ContainerOutlineInFood = styled(baseOutline)`
  grid-template-rows: repeat(2, auto);
  padding: 90px 109px 40px 105px;
  @media screen and (max-width: ${pc}) {
    padding: 0 59px 55px 59px;
  }
  @media screen and (max-width: ${pad}) {
    padding: 43px 26px 54px 26px;
  }
`;

export const ContainerOutlineInTraffic = styled(baseOutline)`
  display: block;
  padding: 81px 163px 84px 163px;
  :before {
    content: "*每隔15秒自動更新";
    display: block;
    position: relative;
    font-size: 16px;
    font-weight: 400;
    color: #ff1d6c;
    margin-bottom: 12px;
    text-align: end;
  }
  @media screen and (max-width: ${pc}) {
    padding: 54px 26px 65px 26px;
  }
  @media screen and (max-width: ${pad}) {
    padding: 80px 16px 40px 16px;
  }
`;
