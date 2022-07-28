import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../../index';
import { NavBar } from './NavBar';
import { Burger } from './Burger';
import { Brand } from './Brand';
import { Search } from './Search';
import { HeaderCart } from './CartButton';




export interface IHeaderProps {
}

export function Header(props: IHeaderProps) {

  const [burger, setBurger] = useState(false)

  return (
    <header className="header">
      <div className="header__container">
        <Burger onClick={() => { setBurger(true) }} />
        <Brand />
        <div className="header__inner">
          <NavBar active={burger} setActive={setBurger} />
          <Search />
          <HeaderCart />
        </div>
      </div>
    </header>
  );
}
