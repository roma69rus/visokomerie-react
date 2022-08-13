import * as React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import { IProductOptionsImages } from '../../../store/ProductStore';

export interface IVMSwiperProps {
  images: IProductOptionsImages[]
}

export function VMSwiper({ images }: IVMSwiperProps) {
  return (
    <Swiper
      slidesPerView={"auto"}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      loop={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {images && images.map(image => {
        return (
          <SwiperSlide key={image.id}>
            <img src={process.env.REACT_APP_API_URL + '/' + image.img_path}/>
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
}
