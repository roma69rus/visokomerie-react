import * as React from 'react'

export interface IVMCartProps {
}

export function VMCart(props: IVMCartProps) {
  return (
    <main>
      <section className="cart container">
        <div className="cart__wrapper">
          <h2 className="cart__heading" style={{marginTop: "40px"}}>Корзина</h2>
          <ul className="cart__list" id="cart__list">
            <li className='cart__list-item'>
              <img src='./1_black_palaco.jpg' alt='' width='262' height='306' className='cart__list-img' />
              <div className='cart__list-wrapper'>
                <h3 className='cart__list-heading'>NAME</h3>
                <div className="cart__list-close"></div>
                <p className='cart__list-text'>Цена: <span className='cart__price'>10000</span></p>
                <p className='cart__list-text'>Цвет: COLOR</p>
                <div className='cart__list-subwrapper'>
                  <label className='cart__list-text'>Количество: </label>
                  <input type='number' min='1' step='1' className='cart__list-qty' value='10' />
                </div>
              </div>
            </li>
          </ul>
          <ul className="cart__list-buttons" id="cart__clear">
            <li>
              <button className="cart__list-button" type="reset">Очистить корзину</button>
            </li>
            <li>
              <button className="cart__list-button" type="button" onClick={() => { }}>Продолжить шопинг</button>
            </li>
          </ul>
          <p className="cart__text-whatsapp" id="cart__text-whatsapp">
            Для того, чтобы брюки сидели на вас безупречно и были идеальной длины, мы поможем вам определить
            размер после оформления заказа, свяжемся с вами в WhatsApp. Оплата заказа уже после
            определения размера :)
          </p>
        </div>
        <div className="cart__shipping_wrapper" id="cart__shipping_wrapper">
          <form className="cart__shipping" id="cart__shipping" action="post">
            <h3 className="cart__shipping_heading">Имя</h3>
            <label className="visually-hidden" htmlFor="name">Name</label>
            <input className="cart__phone" id="clientname" type="text" placeholder="Ваше имя" />
            <h3 className="cart__shipping_heading">Номер телефона</h3>
            <label className="visually-hidden" htmlFor="phone">Phone</label>
            <input className="cart__phone phone" id="phone" type="text" placeholder="+7 (912) 345-67-89" />
          </form>
          <div className="cart__total">
            <div className="cart__total_text_wrapper">
              <p className="cart__grandtotal_text" id="cart__grandtotal_text"></p>
            </div>
            <div className="cart__total_checkout_wrapper">
              <hr className="cart__total_line" />
              <button className="cart__total_checkout" id="cart__total_checkout" type="submit" data-modal="3">Заказать</button>
            </div>
            <p className="condition">Нажимая кнопку "Заказать", вы даете согласие на обработку персональных данных в любой форме</p>
          </div>
          <div className="modal" data-modal="3">
            <svg className="modal__cross js-modal-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"></path>
            </svg>
            <p className="modal__title" style={{ fontSize: "20px" }}>Заказ оформлен и отправлен менеджеру</p>
            <p className="modal__title">Если вы желаете ускорить этот процесс, обратитесь в Whatsapp по ссылке ниже</p>
            <button className="modal__btn site-btn" id="watsup_btn">WHATSAPP</button>
          </div>
          <div className="modal_overlay" id="overlay-modal"></div>
        </div>
        <div className="main__overlay"></div>
      </section>
    </main>
  )
}