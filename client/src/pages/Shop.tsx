import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { Context, IContext } from '..';
import { VMFooter } from '../components/UI/footer/VMFooter';
import { Header } from '../components/UI/header/Header';
import { Hero } from '../components/UI/hero/Hero';
import { ProductGrid } from '../components/UI/productGrid/ProductGrid';
import { getMainPageOptions } from '../http/productAPI';
import {getSlider} from '../http/sliderAPI'

export interface IShopProps {
}

export const Shop = observer((props: IShopProps) => {

  const { productData, sliderData } = React.useContext(Context) as IContext

  React.useEffect(() => {
    getMainPageOptions().then((data) => {
      productData.setAllOptions(data)
    })

    getSlider().then((data) => {
      sliderData.setSlider(data)
    })

  }, [])



  return (
    <div>
      <Header />
      <Hero
        slider={sliderData.slider}
      />
      <h2 className='featured__heading' style={{ textAlign: "center" }}> Безупречные брюки на ваш рост </h2>
      <ProductGrid
        productsOptions={productData.allOptions}
      />
      <VMFooter />
    </div>
  );
})
