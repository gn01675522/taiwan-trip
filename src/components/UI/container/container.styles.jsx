import styled from "styled-components";

import { screenWide } from "../../../dummy_data/DUMMY_DATA";

const { pad, pc } = screenWide;

const baseOutline = styled.div`
  display: grid;
  width: 100vw;
  grid-gap: 60px;
  background-color: #f6f7fb;
`;

export const ContainerOutlineInHome = styled(baseOutline)`
  grid-template-rows: repeat(3, auto);
  padding: 43px 7vw 54px 7vw;
  @media screen and (min-width: ${pad}) {
    padding: 0 8vw 40px 8vw;
  }
  @media screen and (min-width: ${pc}) {
    padding: 65px 109px 60px 109px;
  }
`;

export const ContainerOutlineInFood = styled(baseOutline)`
  grid-template-rows: repeat(2, auto);
  padding: 43px 7vw 54px 7vw;

  @media screen and (min-width: ${pad}) {
    padding: 0 8vw 55px 8vw;
  }
  @media screen and (min-width: ${pc}) {
    padding: 90px 109px 40px 105px;
  }
`;

export const ContainerOutlineInTraffic = styled(baseOutline)`
  display: block;
  padding: 80px 3.5vw 40px 3.5vw;
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
  @media screen and (min-width: ${pad}) {
    padding: 54px 3.5vw 65px 3.5vw;
  }
  @media screen and (min-width: ${pc}) {
    padding: 81px 12vw 84px 12vw;
  }
`;
