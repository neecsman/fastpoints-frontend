import { HashLink as Link } from "react-router-hash-link";

import { Button } from "../../Components";
import { Feedback } from "../../Layouts";

import style from "./main.module.scss";

import main from "../../img/main.png";
import region from "../../img/region.png";
import payments from "../../img/payments.png";

import clothes from "../../img/delivery/clothes.png";
import docs from "../../img/delivery/docs.png";
import product from "../../img/delivery/product.png";
import gifts from "../../img/delivery/gifts.png";
import medical from "../../img/delivery/medical.png";
import all from "../../img/delivery/all.png";

const Home = () => {
  return (
    <>
      <main className={style.main}>
        <div className={style.main__container}>
          <div className={style.main__container_left}>
            <h1>Доставка курьером в кратчайшие сроки</h1>
            <p>
              Наш девиз – надежность, выгода и индивидуальный подход к каждому.
            </p>
            <Link to="/create-order">
              <Button xl>Заказать доставку</Button>
            </Link>
          </div>

          <div className={style.main__container_right}>
            <img src={main} alt="Курьер возле машины" />
          </div>
        </div>
      </main>
      <section id="advantages" className={style.advantages}>
        <h2 className={style.advantages_title}>Преимущества</h2>
        <div className={style.advantages_block}>
          <div>
            <h3>35 минут</h3>
            <p>Среднее время доставки по городу</p>
          </div>
          <div>
            <h3>97 %</h3>
            <p>Успешность выполнения заявок</p>
          </div>
          <div>
            <h3>от 350 ₽</h3>
            <p>Стоимость курьерской доставки по городу</p>
          </div>
          <div>
            <h3>5 минут</h3>
            <p>
              Скорость <br /> обработки заказа
            </p>
          </div>
        </div>
      </section>
      <section id="region" className={style.region}>
        <div className={style.region_left}>
          <img src={region} alt="Регионы длоставки" />
        </div>
        <div className={style.region_right}>
          <h2>
            Надежная доставка <br /> в крупных городах России
          </h2>
          <ul>
            <li>Санкт-Петербург</li>
            <li>Нижний Новгород</li>
            <li>Екатеринбург</li>
            <li>Новосибирск</li>
            <li>Москва и Московская область</li>
          </ul>
        </div>
      </section>
      <section id="delivery" className={style.delivery}>
        <h2>Виды доставки</h2>
        <div className={style.delivery_container}>
          <div>
            <h3>Одежда</h3>
            <p>
              Доставка из магазинов <br /> и маркетплейсов
            </p>
            <img src={clothes} alt="Одежда" />
          </div>
          <div>
            <h3>Документы</h3>
            <p>
              Доставка в целости <br /> и сохранности
            </p>
            <img src={docs} alt="Документы" />
          </div>
          <div>
            <h3>Продукты</h3>
            <p>
              Доставка до дверей <br /> в термосумках
            </p>
            <img src={product} alt="Продукты" />
          </div>
          <div>
            <h3>Подарки</h3>
            <p>
              Доставка для близких <br /> и знакомых
            </p>
            <img src={gifts} alt="Подарки" />
          </div>
          <div>
            <h3>Лекарства</h3>
            <p>
              Доставим медикаменты <br /> в самые короткие сроки
            </p>
            <img src={medical} alt="Лекарства" />
          </div>
          <div>
            <h3>Всё, что угодно</h3>
            <p>
              Доставка любых <br /> товаров на ваш вкус{" "}
            </p>
            <img src={all} alt="Всё, что угодно" />
          </div>
        </div>
      </section>
      <section id="how" className={style.how}>
        <h2>Как работает?</h2>
        <div className={style.how_container}>
          <div>
            <span>Заявка</span>
            <p>
              Создайте заказ через сайт <br /> или по номеру телефона
            </p>
          </div>
          <div>
            <span>Оформление</span>
            <p>
              Получите уведомление <br /> о назначении курьера
            </p>
          </div>
          <div>
            <span>Доставка</span>
            <p>
              Курьер оперативно <br /> доставит получателю
            </p>
          </div>
          <div>
            <span>Оплата</span>
            <p>
              Произведите оплату <br /> за доставку
            </p>
          </div>
        </div>
      </section>
      <section id="tarifs" className={style.tarifs}>
        <h2>Тарифы</h2>
        <div className={style.tarifs_container}>
          <div>
            <h3>Стандарт</h3>
            <span>от 350 ₽</span>
            <ul>
              <li>В пределах города</li>
              <li>Доставка крупногабарита</li>
              <li>Доставка в ночное время</li>
            </ul>
            <Link to="/create-order">
              <Button tarifs>Заказать доставку</Button>
            </Link>
          </div>
          <div>
            <h3>Премиум</h3>
            <span>от 950 ₽</span>
            <ul>
              <li>В пределах города</li>
              <li>Доставка крупногабарита</li>
              <li>Доставка в ночное время</li>
            </ul>
            <Link to="/create-order">
              <Button tarifs>Заказать доставку</Button>
            </Link>
          </div>
          <div>
            <h3>VIP</h3>
            <span>от 1950 ₽</span>
            <ul>
              <li>В пределах города</li>
              <li>Доставка крупногабарита</li>
              <li>Доставка в ночное время</li>
            </ul>
            <Link to="/create-order">
              <Button tarifs>Заказать доставку</Button>
            </Link>
          </div>
        </div>
      </section>
      <section className={style.payments}>
        <div className={style.payments_container}>
          <div className={style.payments_container_left}>
            <h2>Способы оплаты</h2>
            <p>
              Выберите удобный для себя способ оплаты и <br /> оплатите доставку
              при передачи груза курьеру.
            </p>
            <ul>
              <li>Карта</li>
              <li>Наличные</li>
            </ul>
          </div>
          <div className={style.payments_container_right}>
            <img src={payments} alt="Способы оплаты" />
          </div>
        </div>
      </section>
      <Feedback />
    </>
  );
};

export default Home;
