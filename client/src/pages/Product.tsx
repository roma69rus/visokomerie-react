import * as React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Context, IContext } from '..';
import { VMFooter } from '../components/UI/footer/VMFooter';
import { Header } from '../components/UI/header/Header';
import { ProductInfoSection } from '../components/UI/product/InfoSection';
import { VMSwiper } from '../components/UI/swiper/VMSwiper';
import { createProduct, getOneProduct } from '../http/productAPI';
import { IProduct, IProductOptions, IProductOptionsImages } from '../store/ProductStore';
import { observer } from 'mobx-react-lite';

export interface IProductProps {
}

export const Product = observer((props: IProductProps) => {

  const { productData } = React.useContext(Context) as IContext

  const { product_slug } = useParams()

  const [searchParams, setSearchParams] = useSearchParams();
  const color = searchParams.get("color")
 
  React.useEffect(() => {
    getOneProduct(product_slug as string, color).then((data) => {
      productData.setProductWithOneOption(data) 

      console.log(productData.productWithOneOption) 
    }) 

  }, []);    


  return (
    <div> 
      <Header />
      <section className='product'>
        <div className='container product__container'>
          {/* <VMSwiper
            images={productData.productWithOneOption?.ProductOptions[0].ProductOptionsImages} 
          /> */}
        </div>
      </section>
      <ProductInfoSection /> 
      <VMFooter />
    </div>
  );
}) 
