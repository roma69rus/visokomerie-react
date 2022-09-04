import * as React from 'react';
import { Context, IContext } from '../../..';
import { ISlider } from '../../../types/sliderTypes';
import { VMSwiper } from '../swiper/VMSwiper';

export interface IHeroProps {
    slider: ISlider[];
}

export function Hero({slider}: IHeroProps) {
    return (
        <section className="hero">
            <div className="container hero__container">
                <VMSwiper
                    images = {slider}
                    isButtonOn={true}
                />                
            </div>
        </section>
    );
}
