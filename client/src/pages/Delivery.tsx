import * as React from 'react';
import { VMFooter } from '../components/UI/footer/VMFooter';
import { Header } from '../components/UI/header/Header';

export interface IDeliveryProps {
}

export function Delivery(props: IDeliveryProps) {
  return (
    <div>
      <Header color='BLACK' />
      <section className="about">
        <h2 className="delivery__header">о доставке и возврате</h2>
        <p className="delivery__text">ДОСТАВКА/ВОЗВРАТ ПО САНКТ-ПЕТЕРБУРГУ</p><br /><br />

        <ul className="delivery__ul">
          <li className="delivery__li-text">
            ОСУЩЕСТВЛЯЕТСЯ ПОСЛЕ ПОЛНОЙ ОПЛАТЫ ЗАКАЗА
          </li>
          <li className="delivery__li-text">
            ДОСТАВЛЯЕТСЯ ЯНДЕКС КУРЬЕРОМ.
          </li>
          <li className="delivery__li-text">
            СТОИМОСТЬ ДОСТАВКИ В ПРЕДЕЛАХ ПЕТЕРБУРГА 350 РУБ.
          </li>
          <li className="delivery__li-text">
            В СЛУЧАЕ ЕСЛИ ТОВАР ВАМ НЕ ПОДОШЁЛ, ЕГО МОЖНО ВЕРНУТЬ ОБРАТНО ЧЕРЕЗ СЛУЖБЫ ДОСТАВКИ (ЯНДЕКС КУРЬЕР ИЛИ ДР.)
          </li>
          <li className="delivery__li-text">
            ПРИ ОБМЕНЕ/ВОЗВРАТЕ ДОСТАВКУ ОПЛАЧИВАЕТ ПОКУПАТЕЛЬ
          </li>
        </ul>
        <p className="delivery__text">ДОСТАВКА/ВОЗРАТ ПО РОССИИ И СНГ</p> <br /> <br />
        <ul className="delivery__ul">
          <li className="delivery__li-text">
            ДОСТУПНА ПОСЛЕ ПОЛНОЙ ОПЛАТЫ ЗАКАЗА
          </li>
          <li className="delivery__li-text">
            ОСУЩЕСТВЛЯЕТСЯ ТРАНСПОРТНОЙ КОМПАНИЕЙ BOXBERRY И ОПЛАЧИВАЕТСЯ ПОКУПАТЕЛЕМ ПРИ ПОЛУЧЕНИИ
          </li>
          <li className="delivery__li-text">
            В СЛУЧАЕ ЕСЛИ ТОВАР ВАМ НЕ ПОДОШЁЛ, ЕГО МОЖНО ВЕРНУТЬ ОБРАТНО ЧЕРЕЗ СЛУЖБЫ ДОСТАВКИ (BOXBERRY. CДЭК)
          </li>
          <li className="delivery__li-text">
            ПРИ ОБМЕНЕ/ВОЗВРАТЕ ДОСТАВКУ ОПЛАЧИВАЕТ ПОКУПАТЕЛЬ
          </li>
          <li className="delivery__li-text">
            СРОК ВОЗВРАТА 14 ДНЕЙ<br /><br /><br />
          </li>
        </ul>

      </section>
      <VMFooter />
    </div>
  );
}
