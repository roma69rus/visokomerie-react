import * as React from 'react';
import { VMSwiper } from '../swiper/VMSwiper';

export interface IHeroProps {
}

export function Hero(props: IHeroProps) {
    return (
        <section className="hero">
            <div className="container hero__container">
                <VMSwiper/>                
            </div>
        </section>
    );
}
