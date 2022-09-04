import * as React from 'react';

export interface ICartCardProps {
  img: string
  name: string;
  price: number;
  color: string;
  quantity: number;
}

export function CartCard({name, price, color, quantity, img}: ICartCardProps) {
  const [q, setQ] = React.useState<number>(quantity)
  
  return (
    <li className='cart__list-item'>
      <img src={process.env.REACT_APP_API_URL + '/' + img} alt='' width='262' height='306' className='cart__list-img' />
      <div className='cart__list-wrapper'>
        <h3 className='cart__list-heading'>{name}</h3>
        <div className="cart__list-close"></div>
        <p className='cart__list-text'>Цена: <span className='cart__price'>{price}</span></p>
        <p className='cart__list-text'>Цвет: {color}</p>
        <div className='cart__list-subwrapper'>
          <label className='cart__list-text'>Количество: </label>
          <input type='number' min='1' step='1' className='cart__list-qty' defaultValue={q} 
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setQ(Number(event.target.value))}
          />
        </div>
      </div>
    </li>
  );
}
