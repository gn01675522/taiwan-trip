//* parent element：
//* 1. App.js

import { Outlet, useLocation } from "react-router-dom";

import { Shadow } from "../../components/UI/shadowCard/shadowCard.styles";

import {
  HomeLink,
  NavigationContainer,
  NavigationLinkContainer,
  NavLink,
  LinkTitle,
  Blocker,
  TaiwanSymbol,
  PinkSymbol,
  YellowSymbol,
  GreenSymbol,
} from "./navigation.styles";

const navOption = [
  {
    title: "台灣景點",
    link: "/",
    frame: <PinkSymbol />,
    color: "#ff1d6c",
  },
  {
    title: "美食住宿",
    link: "/foodAndHotel",
    frame: <YellowSymbol />,
    color: "#ffb72c",
  },
  // {
  //   title: "景點交通",
  //   link: "/traffic",
  //   frame: <GreenSymbol />,
  //   color: "#007350",
  // },
];

const Navigation = () => {
  const route = useLocation().pathname.slice(1);

  const areLinksEqual = (link) => {
    const linkParam = link.slice(1);

    switch (linkParam) {
      case "":
        if (
          route === "" ||
          route.includes("scenicSpot/") ||
          route.includes("event/")
        )
          return true;
        break;
      case "foodAndHotel":
        if (
          route === "foodAndHotel" ||
          route.includes("food/") ||
          route.includes("hotel/")
        )
          return true;
        break;
      case "traffic":
        if (route === "traffic") return true;

        break;
      default:
        return false;
    }
  };

  // 手機尺寸需要針對不同頁面來改變 nav 連結顏色，
  // 上面的函式是拿來比對 route 及 連結 link 是否相同。
  // 比較 route 和 link 如果符合那麼就直接 true，以便加入 currentPage

  return (
    <>
      <NavigationContainer>
        <HomeLink to="/">
          <TaiwanSymbol />
        </HomeLink>
        <NavigationLinkContainer>
          {navOption.map(({ title, link, frame, color }) => {
            const isMatchRoute = areLinksEqual(link);

            return (
              <NavLink to={link} key={title}>
                {frame}
                {isMatchRoute ? (
                  <LinkTitle color={color} currentPage>
                    {title}
                  </LinkTitle>
                ) : (
                  <LinkTitle color={color}>{title}</LinkTitle>
                )}
              </NavLink>
            );
          })}
        </NavigationLinkContainer>
      </NavigationContainer>
      <Blocker />
      <Shadow $contentType="nav" />
      <Outlet />
    </>
  );
};

export default Navigation;

//todo traffic 尚未完成，暫不開放
