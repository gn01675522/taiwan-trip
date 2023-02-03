import { Outlet, Link } from "react-router-dom";

import { ReactComponent as TaiwanLogo } from "../../assets/taiwanLogo.svg";
import { ReactComponent as PinkFrame } from "../../assets/pinkFrame.svg";
import { ReactComponent as YellowFrame } from "../../assets/yellowFrame.svg";
import { ReactComponent as GreenFrame } from "../../assets/greenFrame.svg";

import classes from "./navigation.styles.module.scss";

const navOption = [
  {
    id: "n1",
    title: "台灣景點",
    link: "/",
    frame: <PinkFrame className={classes.frame} />,
  },
  {
    id: "n2",
    title: "美食住宿",
    link: "/",
    frame: <YellowFrame className={classes.frame} />,
  },
  {
    id: "n3",
    title: "景點交通",
    link: "/",
    frame: <GreenFrame className={classes.frame} />,
  },
];

const Navigation = () => {
  return (
    <>
      <nav className={classes.nav}>
        <div>
          <TaiwanLogo className={classes.logo} />
        </div>
        <ul className={classes["nav-list"]}>
          {navOption.map(({ id, title, link, frame }) => {
            return (
              <Link to={link} key={id}>
                <li className={classes["nav-item"]}>
                  {frame}
                  <span>{title}</span>
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
