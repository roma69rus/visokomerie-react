import * as React from 'react';
import { VMCart } from '../components/UI/cart/VMCart';
import { VMFooter } from '../components/UI/footer/VMFooter';
import { Header } from '../components/UI/header/Header';

export interface ICartProps {
}

export function Cart(props: ICartProps) {
  return (
    <>
      <Header />
      <VMCart />
      <VMFooter/>
    </>
  );
}

