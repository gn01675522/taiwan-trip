//* parent element：
//* 1. App.js

import { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import {
  TaiwanSymbol,
  PinkCircleSymbol,
  YellowCircleSymbol,
  GreenCircleSymbol,
} from "../../components/UI/svgToComponent/svgToComponent.styles";

import { BUTTON_TYPE_CLASSES } from "../../components/UI/button/button.component";

import {
  HomeLink,
  ButtonInMobile,
  NavigationContainer,
  NavigationLinkContainer,
  NavLink,
  LinkTitle,
  Blocker,
  BottomShadow,
} from "./navigation.styles";

const navOption = [
  {
    title: "台灣景點",
    link: "/",
    frame: <PinkCircleSymbol />,
    color: "#ff1d6c",
  },
  {
    title: "美食住宿",
    link: "/foodAndHotel",
    frame: <YellowCircleSymbol />,
    color: "#ffb72c",
  },
  // {
  //   title: "景點交通",
  //   link: "/traffic",
  //   frame: <GreenCircleSymbol />,
  //   color: "#007350",
  // },
];

const Navigation = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(window.innerWidth);
  const navigate = useNavigate();
  const route = useLocation().pathname.slice(1);

  useEffect(() => {
    setIsMobileScreen(window.innerWidth);

    window.addEventListener("resize", setIsMobileScreen);

    return () => {
      window.removeEventListener("resize", setIsMobileScreen);
    };
  }, [isMobileScreen]);

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

  const onClickToSearch = () => {
    navigate("/search");
  };

  // 手機尺寸畫面需要針對不同頁面來改變 nav 連結顏色，
  // 上面的函式是拿來比對 route 及 連結的 link 是否為同類型頁面。
  // 比較 route 和 link 如果符合那麼就直接 true，以便加入 currentPage

  return (
    <>
      <NavigationContainer>
        <HomeLink to="/">
          <TaiwanSymbol />
        </HomeLink>
        {isMobileScreen < 768 && (
          <ButtonInMobile
            buttonType={BUTTON_TYPE_CLASSES.search}
            onClick={onClickToSearch}
          />
        )}
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
      {(isMobileScreen >= 768 || isMobileScreen < 1024) && <BottomShadow />}
      <Blocker />
      <Outlet />
    </>
  );
};

export default Navigation;

//todo traffic 尚未完成，暫不開放
