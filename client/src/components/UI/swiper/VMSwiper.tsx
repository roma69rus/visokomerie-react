import * as React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";

import { IImage, IProductOptionsImages } from '../../../store/ProductStore';



export interface IVMSwiperProps<T extends IImage> {
  images: Array<T>;
  // renderImages: (image: T) => React.ReactNode
}

export function VMSwiper<T extends IImage>({ images }: IVMSwiperProps<T>) {
  
  React.useEffect(() => {
    console.log(123)
  },[])
  
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
