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
  height: 100%;
  grid-template-rows: repeat(3, auto);
  padding: 43px 7vw 54px 7vw;
  @media screen and (min-width: ${pad}) {
    padding: 0 8vw 40px 8vw;
  }
  @media screen and (min-width: ${pc}) {
    padding: 65px 109px 60px 109px;
  }
`;

export const ContainerOutlineInEvent = styled(ContainerOutlineInHome)``;

export const ContainerOutlineInFood = styled(baseOutline)`
  height: 100%;
  grid-template-rows: repeat(2, auto);
  padding: 43px 7vw 54px 7vw;
  @media screen and (min-width: ${pad}) {
    padding: 0 8vw 55px 8vw;
  }
  @media screen and (min-width: ${pc}) {
    padding: 90px 109px 40px 105px;
  }
`;

export const ContainerOutlineInHotel = styled(ContainerOutlineInFood)``;

export const ContainerOutlineInScenicSpot = styled(ContainerOutlineInHome)``;

export const ContainerOutlineInTraffic = styled(baseOutline)`
  display: block;
  height: 100%;
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

export const ContainerOutlineInSearch = styled(baseOutline)`
  display: block;
  height: calc(100vh - 32px);
  padding: 30px 16px 24px 16px;
`; //* 32px 是 footer 的高度，因 search 頁面只會在 mobile 出現，所以就是這固定尺寸。

//* 有些內部無任何 css 的 component 是為了讓每個 PAGE_TYPE 都有對應的元件
//* 最主要目的是為了之後如果內容有任何改變，就不用另外再新增，可以直接修改。
