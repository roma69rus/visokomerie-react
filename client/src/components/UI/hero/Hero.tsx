import * as React from 'react';
import { Context, IContext } from '../../..';
import { IProductOptionsImages } from '../../../store/ProductStore';
import { VMSwiper } from '../swiper/VMSwiper';

export interface IHeroProps {
}

export function Hero(props: IHeroProps) {
    const { productData } = React.useContext(Context) as IContext
    return (
        <section className="hero">
            <div className="container hero__container">
                <VMSwiper
                    images = {productData.productWithOneOption.ProductOptions[0].ProductOptionsImages }
                />                
            </div>
        </section>
    );
}
