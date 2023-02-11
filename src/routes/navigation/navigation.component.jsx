//* Parent： App.js

import { Outlet } from "react-router-dom";

import { ReactComponent as TaiwanLogo } from "../../assets/svg/taiwanLogo.svg";
import { ReactComponent as PinkFrame } from "../../assets/svg/pinkFrame.svg";
import { ReactComponent as YellowFrame } from "../../assets/svg/yellowFrame.svg";
import { ReactComponent as GreenFrame } from "../../assets/svg/greenFrame.svg";

import {
  NavigationContainer,
  NavigationLinkContainer,
  NavLink,
  LinkTitle,
  Blocker,
} from "./navigation.styles";

const navOption = [
  {
    title: "台灣景點",
    link: "/",
    frame: <PinkFrame />,
  },
  {
    title: "美食住宿",
    link: "/food",
    frame: <YellowFrame />,
  },
  {
    title: "景點交通",
    link: "/traffic",
    frame: <GreenFrame />,
  },
];

const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <div>
          <TaiwanLogo />
        </div>
        <NavigationLinkContainer>
          {navOption.map(({ title, link, frame }) => {
            return (
              <NavLink to={link} key={title}>
                {frame}
                <LinkTitle>{title}</LinkTitle>
              </NavLink>
            );
          })}
        </NavigationLinkContainer>
      </NavigationContainer>
      <Blocker />
      <Outlet />
    </>
  );
};

export default Navigation;
