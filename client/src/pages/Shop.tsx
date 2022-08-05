import * as React from 'react';
import { VMCard } from '../components/UI/card/VMCard';
import { VMFooter } from '../components/UI/footer/VMFooter';
import { Header } from '../components/UI/header/Header';
import { Hero } from '../components/UI/hero/Hero';
import { ProductGrid } from '../components/UI/productGrid/ProductGrid';

export interface IShopProps {
}

export function Shop(props: IShopProps) {
  return (
    <div>
      <Header/>
      <Hero/>
      <h2 className='featured__heading' style={{textAlign: "center"}}> Безупречные брюки на ваш рост </h2> 
      <ProductGrid/>
      <VMFooter/>
    </div>
  );
}
