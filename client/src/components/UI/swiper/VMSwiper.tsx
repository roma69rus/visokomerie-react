import * as React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

export interface IVMSwiperProps {
}

export function VMSwiper(props: IVMSwiperProps) {
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
      <SwiperSlide> <img src='./1_black_palaco.jpg' style={{width: "100%"}}/> </SwiperSlide>
      <SwiperSlide> <img src='./1_black_palaco.jpg'/> </SwiperSlide>
      <SwiperSlide> <img src='./1_black_palaco.jpg'/> </SwiperSlide>
      <SwiperSlide> <img src='./1_black_palaco.jpg'/> </SwiperSlide>
      <SwiperSlide> <img src='./1_black_palaco.jpg'/> </SwiperSlide>
      <SwiperSlide> <img src='./1_black_palaco.jpg'/> </SwiperSlide>
      <SwiperSlide> <img src='./1_black_palaco.jpg'/> </SwiperSlide>
      <SwiperSlide> <img src='./1_black_palaco.jpg'/> </SwiperSlide>
      <SwiperSlide> <img src='./1_black_palaco.jpg'/> </SwiperSlide>
    </Swiper>
  );
}
