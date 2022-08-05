import * as React from 'react';
import { VMFooter } from '../components/UI/footer/VMFooter';
import { Header } from '../components/UI/header/Header';
import { ProductInfoSection } from '../components/UI/product/InfoSection';
import { VMSwiper } from '../components/UI/swiper/VMSwiper';

export interface IProductProps {
}

export function Product(props: IProductProps) {
  return (
    <div>
      <Header/>
      <section className='product'>
        <div className='container product__container'>
          <VMSwiper/>
        </div>
      </section>
      <ProductInfoSection/>
      <VMFooter/>      
    </div>
  );
}
