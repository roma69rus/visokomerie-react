import * as React from 'react'
import { getCartOptions, } from '../../../http/productAPI';
import { IProductOptions } from '../../../types/productOptionsTypes';
import { clearlocalStorage, getlocalStorage, ICart } from '../../LocalStorage/localStorage';
import { CartCard } from './VMCartCard';

export interface IVMCartProps {
}

export function VMCart(props: IVMCartProps) {
  const [items, setItems] = React.useState<ICart>(getlocalStorage());                   //localStorage
  const [products, setProducts] = React.useState<IProductOptions[]>([])  //DataBase
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  React.useEffect(() => {

    const ids: number[] = Object.keys(items).map(Number);
    setIsLoading(true)
    getCartOptions(ids).then((data) => {
      setProducts([...data])
    }).finally(() => {
      setIsLoading(false)
    })

    console.log(items)

  }, []);




  return (
    <main>
      <h2 className="cart__heading" style={{ marginTop: "40px" }}>Корзина</h2>
      <section className="cart container">
        {Object.keys(items).length !== 0 ?
          <>
            <div className="cart__wrapper">
              <ul className="cart__list" id="cart__list">
                {!isLoading ?
                  products.map((item) => {
                    return (
                      <CartCard key={item.id}
                        img={item.ProductOptionsImages[0].img_path}
                        name={item.Product?.name as string}
                        price={item.price_increase + (item.Product?.price as number)}
                        color={item.product_color}
                        quantity={items[item.id].quantity}
                      />
                    )

                  })
                  : <div>Загрузка</div>
                }
              </ul>
              <ul className="cart__list-buttons" id="cart__clear">
                <li>
                  <button className="cart__list-button" type="reset"
                    onClick={() => {
                      clearlocalStorage()
                      setItems(getlocalStorage())
                    }}
                  >Очистить корзину</button>
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
              <div className="modal_overlay" id="overlay-modal"></div>
            </div>
          </>
          : <h1 className='text-center m-auto mb-5'>Корзина пустая</h1>
        }
      </section>
    </main>
  )
}
