import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { Context, IContext } from '..';
import { VMFooter } from '../components/UI/footer/VMFooter';
import { Header } from '../components/UI/header/Header';
import { Hero } from '../components/UI/hero/Hero';
import { ProductGrid } from '../components/UI/productGrid/ProductGrid';
import { IProductOptions, IProductsWithId } from '../store/ProductStore';

export interface IShopProps {
}

export const Shop = observer((props: IShopProps) => {
  
  const { productData } = React.useContext(Context) as IContext

  const mainPageProductOptions: IProductOptions[] = JSON.parse(JSON.stringify(productData.allOptions))
  
  return (
    <div>
      <Header/>
      <Hero/>
      <h2 className='featured__heading' style={{textAlign: "center"}}> Безупречные брюки на ваш рост </h2> 
      <ProductGrid
        productsOptions={mainPageProductOptions}
      />
      <VMFooter/>
    </div>
  );
})
