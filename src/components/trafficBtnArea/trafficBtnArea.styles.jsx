import styled from "styled-components";
import { screenWide } from "../../dummy_data/DUMMY_DATA";

const { pad, pc } = screenWide;

export const TrafficBtnOutline = styled.div`
  position: absolute;
  width: 90%;
  top: 180px;
  margin: 0 5%;
  text-align: center;
  background: white;
  border-radius: 4px;
  z-index: 90;
  @media screen and (min-width: ${pad}) {
    width: 100%;
    top: 186px;
    margin: 0;
    z-index: 102;
  }
  @media screen and (min-width: ${pc}) {
    top: 220px;
  }
`;

export const BannerTrafficButton = styled.fieldset`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 0;
  height: 90px;
  padding: 0;
  border: none;
  justify-content: center;
  align-content: center;
  input {
    display: none;
  }
  input:checked + label {
    border-bottom: 4px solid #ff1d6c;
  }
  @media screen and (min-width: ${pad}) {
    height: 50px;
    grid-gap: 24px;
    grid-template-columns: 30% 30%;
  }
  @media screen and (min-width: ${pc}) {
    grid-template-columns: 20% 20%;
    grid-gap: 84px;
  }
`;

export const TrafficOption = styled.label`
  position: relative;
  width: 100%;
  top: 17px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
  span {
    font-size: 16px;
    font-weight: 400;
    color: #ff1d6c;
  }
  @media screen and (min-width: ${pad}) {
    line-height: 50px;
    top: 0px;
  }
`;
