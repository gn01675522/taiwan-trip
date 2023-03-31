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
`;

export const NavigationContainer = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  width: 100%;
  height: ${navigationHeight.mobile};
  justify-content: center;
  align-items: center;
  padding: 15px 18px 0 18px;
  background-color: white;
  z-index: 999;
  @media screen and (min-width: ${pad}) {
    height: ${navigationHeight.pad};
    flex-direction: row;
    padding: 17px 16px 17px 40px;
    justify-content: space-between;
    align-items: baseline;
  }
  @media screen and (min-width: ${pc}) {
    height: ${navigationHeight.pc};
    padding: 18px 6rem;
  }
`;

export const NavigationLinkContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: space-between;
  padding: 0 31px;
  border-radius: 6px;
  box-shadow: 0px 2px 4px rgba(13, 11, 12, 0.2);
  @media screen and (min-width: ${pad}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 27px;
    width: auto;
    height: min-content;
    box-shadow: none;
    padding: 0;
    border-radius: 0;
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
  text-decoration: none;
  ${({ currentPage }) => {
    return currentPage ? `color: #FF1D6C;` : `color: #acacac;`;
  }}

  @media screen and (min-width:${pad}) {
    text-decoration: underline;
    ${({ color }) => {
      return `
        color: ${color};
    `;
    }}
  }
`;

export const BottomShadow = styled(Shadow)`
  display: none;
  @media screen and (min-width: ${pad}) {
    display: block;
    width: 97%;
    margin: 0 1.5%;
    top: 40px;
    z-index: 990;
  }
  @media screen and (min-width: ${pc}) {
    display: none;
  }
`;

export const Blocker = styled.div`
  width: 100%;
  height: ${navigationHeight.mobile};
  @media screen and (min-width: ${pad}) {
    height: ${navigationHeight.pad};
  }
  @media screen and (min-width: ${pc}) {
    height: ${navigationHeight.pc};
  }
`;
