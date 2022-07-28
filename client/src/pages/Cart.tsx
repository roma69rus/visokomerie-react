import * as React from 'react';
import { Header } from '../components/UI/header/Header';

export interface ICartProps {
}

export function Cart(props: ICartProps) {
  return (
    <div>
      <Header/>
      Cart
    </div>
  );
}

