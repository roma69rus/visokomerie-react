import * as React from 'react';
import { Header } from '../components/UI/header/Header';

export interface IProductProps {
}

export function Product(props: IProductProps) {
  return (
    <div>
      <Header/>
      Product
    </div>
  );
}
