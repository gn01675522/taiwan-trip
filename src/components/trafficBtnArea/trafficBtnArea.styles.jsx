import styled from "styled-components";
import { screenWide } from "../../dummy_data/DUMMY_DATA";

const { pad, pc } = screenWide;

export const TrafficBtnOutline = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  background: white;
  top: 220px;
  z-index: 102;
  @media screen and (max-width: ${pc}) {
    top: 186px;
  }
  @media screen and (max-width: ${pad}) {
    width: 90%;
    top: 180px;
    margin: 0 5%;
    z-index: 90;
    border-radius: 4px;
  }
`;

export const BannerTrafficButton = styled.fieldset`
  display: grid;
  grid-template-columns: 20% 20%;
  grid-gap: 84px;
  height: 50px;
  border: none;
  justify-content: center;
  align-content: center;
  input {
    display: none;
  }
  input:checked + label {
    border-bottom: 4px solid #ff1d6c;
  }
  @media screen and (max-width: ${pc}) {
    grid-template-columns: 30% 30%;
  }
  @media screen and (max-width: ${pad}) {
    padding: 0;
    grid-template-columns: 50% 50%;
    grid-gap: 0;
    height: 90px;
  }
`;

export const TrafficOption = styled.label`
  position: relative;
  width: 100%;
  text-align: center;
  line-height: 50px;
  top: 4px;
  cursor: pointer;
  span {
    font-size: 16px;
    font-weight: 400;
    color: #ff1d6c;
  }
  @media screen and (max-width: ${pad}) {
    top: 17px;
    line-height: 52px;
  }
`;
