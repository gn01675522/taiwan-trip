import styled from "styled-components";
import { Link } from "react-router-dom";
import { Shadow } from "../../components/UI/svgToComponent/svgToComponent.styles";
import { screenWide } from "../../dummy_data/DUMMY_DATA";
import Button from "../../components/UI/button/button.component";

const { pad, pc } = screenWide;

const navigationHeight = {
  mobile: "120px",
  pad: "84px",
  pc: "104px",
};

export const HomeLink = styled(Link)`
  width: fit-content;
  line-height: 0;
`;

export const ButtonInMobile = styled(Button)`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 38px;
  right: 19px;
  @media screen and (min-width: ${pad}) {
    display: none;
  }
`;

export const NavigationContainer = styled.div`
  display: flex;
  position: fixed;
  padding: 18px 6rem;
  width: 100%;
  height: ${navigationHeight.pc};
  justify-content: space-between;
  background-color: white;
  z-index: 999;
  @media screen and (max-width: ${pc}) {
    padding: 17px 40px;
    height: ${navigationHeight.pad};
  }
  @media screen and (max-width: ${pad}) {
    flex-direction: column;
    gap: 13px;
    justify-content: center;
    align-items: center;
    height: ${navigationHeight.mobile};
    padding: 15px 18px 0 18px;
  }
`;

export const NavigationLinkContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 27px;
  @media screen and (max-width: ${pad}) {
    display: flex;
    width: 100%;
    height: 40px;
    justify-content: space-between;
    padding: 0 31px;
    border-radius: 6px;
    box-shadow: 0px 2px 4px rgba(13, 11, 12, 0.2);
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  height: 100%;
  gap: 8px;
  align-items: center;
  outline: 1px slid red;
`;

export const LinkTitle = styled.span`
  margin-top: 6px;
  line-height: 20.27px;
  font-size: 14px;
  text-decoration: underline;
  ${({ color }) => {
    return `
    color: ${color};
    `;
  }}
  @media screen and (max-width: ${pad}) {
    text-decoration: none;
    ${({ currentPage }) => {
      return currentPage ? `color: #FF1D6C;` : `color: #acacac;`;
    }}
  }
`;

export const BottomShadow = styled(Shadow)`
  width: 97%;
  margin: 0 1.5%;
  top: 40px;
  z-index: 990;
  @media screen and (min-width: ${pc}) {
    display: none;
  }
`;

export const Blocker = styled.div`
  display: block;
  width: 100%;
  height: 104px;
  @media screen and (max-width: ${pc}) {
    height: 84px;
  }
  @media screen and (max-width: ${pad}) {
    height: 120px;
  }
`;
