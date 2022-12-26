import { HashLink as Link } from "react-router-hash-link";
import style from "./footer.module.scss";
import logo from "../../img/logo.svg";
const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.info}>
        <img src={logo} alt="Логотип" />
        <ul>
          <li>ООО ФП</li>
          <li>ОГРН 1227700617870</li>
          <li>ИНН 9731100374</li>
        </ul>
        <p>© 2022 fastpoints.ru</p>
      </div>
      <div className={style.nav}>
        <h3>Навигация</h3>
        <nav>
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
      </div>
      <div className={style.docs}>
        <h3>Документы</h3>
        <nav>
          <ul>
            <li>Оферта</li>
            <li>Договор оказания услуг</li>
            <li>Беопасная сделка</li>
            <li>Правила использования ПО «FastPoints»</li>
            <li>Политика обработки персональных данных</li>
          </ul>
        </nav>
      </div>
      <div className={style.contacts}>
        <h3>Контакты</h3>

        <p>+7 (495) 148-71-49</p>
        <p>info-fastpoints@yandex.com</p>
      </div>

      <div className={style.adress}>
        <h3>Контакты</h3>
        <p>
          121614, г. Москва, вн.тер.г. муниципальный округ Крылатское, ул.
          Крылатские холмы, д. 32, к. 2, помещ. 4/1, ком./офис 3/8
        </p>
      </div>
    </footer>
  );
};

export default Footer;
