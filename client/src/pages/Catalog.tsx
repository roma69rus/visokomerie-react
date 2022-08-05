import * as React from 'react';
import { VMFooter } from '../components/UI/footer/VMFooter';
import { Header } from '../components/UI/header/Header';
import { ProductGrid } from '../components/UI/productGrid/ProductGrid';

export interface ICatalogProps {
}

export function Catalog (props: ICatalogProps) {
  return (
    <div>
      <Header/>
      <h2 className='catalog__heading'>Категория</h2>
      <p className='catalog__text'>Описание категории</p>    
      <ProductGrid/>
      <VMFooter/>
    </div>
  );
}
