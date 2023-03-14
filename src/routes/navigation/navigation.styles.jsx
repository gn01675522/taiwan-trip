import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as TaiwanLogo } from "../../assets/svg/taiwanLogo.svg";
import { ReactComponent as PinkFrame } from "../../assets/svg/pinkFrame.svg";
import { ReactComponent as YellowFrame } from "../../assets/svg/yellowFrame.svg";
import { ReactComponent as GreenFrame } from "../../assets/svg/greenFrame.svg";

const screenWide = {
  pad: "768px",
  pc: "1024px",
};

export const HomeLink = styled(Link)`
  width: fit-content;
  line-height: 0;
`;

export const TaiwanSymbol = styled(TaiwanLogo)`
  width: 99px;
  height: 57px;
  @media screen and (max-width: ${screenWide.pc}) {
    width: 86px;
    height: 50px;
  }
  @media screen and (max-width: ${screenWide.pad}) {
    width: 90px;
    height: 52px;
  }
`;

export const PinkSymbol = styled(PinkFrame)`
  width: 34px;
  height: 34px;
  @media screen and (max-width: ${screenWide.pad}) {
    display: none;
  }
`;

export const YellowSymbol = styled(YellowFrame)`
  width: 34px;
  height: 34px;
  @media screen and (max-width: ${screenWide.pad}) {
    display: none;
  }
`;

export const GreenSymbol = styled(GreenFrame)`
  width: 34px;
  height: 34px;
  @media screen and (max-width: ${screenWide.pad}) {
    display: none;
  }
`;

export const NavigationContainer = styled.nav`
  display: flex;
  position: fixed;
  padding: 18px 6rem;
  width: 100%;
  height: 104px;
  justify-content: space-between;
  background-color: white;
  z-index: 998;
  @media screen and (max-width: ${screenWide.pc}) {
    padding: 17px 40px;
    height: 84px;
  }
  @media screen and (max-width: ${screenWide.pad}) {
    flex-direction: column;
    gap: 13px;
    justify-content: center;
    align-items: center;
    height: 120px;
    padding: 15px 18px 0 18px;
  }
`;

export const TaiwanLogos = styled(Link)`
  background-image: url(${TaiwanLogo});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const NavigationLinkContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 27px;
  @media screen and (max-width: ${screenWide.pad}) {
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
  @media screen and (max-width: ${screenWide.pad}) {
    text-decoration: none;
    ${({ currentPage }) => {
      return currentPage ? `color: #FF1D6C;` : `color: #acacac;`;
    }}
  }
`;

export const Blocker = styled.div`
  display: block;
  width: 100%;
  height: 104px;
`;
