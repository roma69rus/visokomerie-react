import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context, IContext } from '../../../index';
import { NavBar } from './NavBar';
import { Burger } from './Burger';
import { Brand } from './Brand';
import { Search } from './Search';
import { HeaderCart } from './CartButton';
import { getAllCategories } from '../../../http/productAPI';




export interface IHeaderProps {
  color: string;
}

export function Header(props: IHeaderProps) {

  const { productData } = React.useContext(Context) as IContext  
  const [burger, setBurger] = useState<boolean>(false)

  return (
    <header className="header">
      <div className="header__container" style={props.color==="BLACK" ? {backgroundColor: "rgba(0, 0, 0, 0.8)"}:{} }>
        <Burger onClick={() => { setBurger(true) }} />
        <Brand />
        <div className="header__inner">
          <NavBar active={burger} setActive={setBurger} />
          {/* <Search /> */}
          <HeaderCart />
        </div>
      </div>
    </header>
  );
}
