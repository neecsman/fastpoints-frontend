import { HashLink as Link } from "react-router-hash-link";

import { Button, Location, Dropdown } from "../../Components";
import { NavState } from "../../Context";

import HamburgerButton from "../../Components/HamburgerButton";
import SlideMenu from "../../Components/SlideMenu";

import style from "./header.module.scss";
import logo from "../../img/logo.svg";

const Header = () => {
  return (
    <NavState>
      <header className={style.header}>
        <div className="flex items-center">
          <Link to="/">
            <img className="mr-3" src={logo} alt="Логотип" />
          </Link>
          <Location />
        </div>

        <nav className={style.nav}>
          <ul>
            <Link to="/#advantages">
              <li>Преимущества</li>
            </Link>
            <Link to="/#region">
              <li>Области доставки</li>
            </Link>
            <Link to="/#delivery">
              <li>Виды доставки</li>
            </Link>
            <Link to="/#how">
              <li>Как работает?</li>
            </Link>
            <Link to="/#tarifs">
              <li>Тариф</li>
            </Link>
          </ul>
        </nav>
        <div className="hidden xl:flex">
          <Link to="/create-order">
            <Button primary>Заказать доставку</Button>
          </Link>
          <Link to="/candidate">
            <Button>Стать курьером</Button>
          </Link>
          <Dropdown />
        </div>

        <HamburgerButton />
        <SlideMenu />
      </header>
    </NavState>
  );
};

export default Header;
