//* Parent： App.js

import { Outlet, Link } from "react-router-dom";

import { ReactComponent as TaiwanLogo } from "../../assets/taiwanLogo.svg";
import { ReactComponent as PinkFrame } from "../../assets/pinkFrame.svg";
import { ReactComponent as YellowFrame } from "../../assets/yellowFrame.svg";
import { ReactComponent as GreenFrame } from "../../assets/greenFrame.svg";

import {
  NavigationContainer,
  NavigationLinkContainer,
  NavLink,
  LinkTitle,
  Blocker,
} from "./navigation.styles";

const navOption = [
  {
    id: "n1",
    title: "台灣景點",
    link: "/",
    frame: <PinkFrame />,
  },
  {
    id: "n2",
    title: "美食住宿",
    link: "/",
    frame: <YellowFrame />,
  },
  {
    id: "n3",
    title: "景點交通",
    link: "/",
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
          {navOption.map(({ id, title, link, frame }) => {
            return (
              <NavLink to={link} key={id}>
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
