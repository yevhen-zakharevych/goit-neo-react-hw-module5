import { NavLink } from "react-router-dom";
import clsx from "clsx";
import style from "./Navigation.module.css";

const buildLinkClass = ({ isActive }) =>
  clsx(style.link, isActive && style.active);

function Navigation() {
  return (
    <nav className={style.nav}>
      <ul className={style.navList}>
        <li>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/movies" className={buildLinkClass}>
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
