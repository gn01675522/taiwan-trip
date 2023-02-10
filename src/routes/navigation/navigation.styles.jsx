import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.nav`
  display: flex;
  position: fixed;
  padding: 18px 6rem;
  width: 100%;
  height: 104px;
  line-height: 104px;
  justify-content: space-between;
  background-color: white;
  z-index: 998;
`;

export const NavigationLinkContainer = styled.div`
  display: flex;
`;

export const NavLink = styled(Link)`
  display: flex;
  height: 100%;
  gap: 8px;
  align-items: center;
  margin-left: 27px;
  outline: 1px slid red;
  :nth-child(1) {
    color: #ff1d6c;
  }
  :nth-child(2) {
    color: #ffb72c;
  }
  :nth-child(3) {
    color: #007350;
  }
`;

export const LinkTitle = styled.span`
  margin-top: 6px;
  line-height: 20.27px;
  font-size: 14px;
  text-decoration: underline;
`;

export const Blocker = styled.div`
  display: block;
  width: 100%;
  height: 104px;
`;
