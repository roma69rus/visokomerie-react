import * as React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import { IImage } from '../../../types/productOptionsTypes';
import { propTypes } from 'react-bootstrap/esm/Image';
import { ISlider } from '../../../types/sliderTypes';
import { useNavigate } from 'react-router-dom';




export interface IVMSwiperProps<T extends IImage> {
  images: Array<T | ISlider>;
  isButtonOn: boolean;
  // renderImages: (image: T) => React.ReactNode
}

export function VMSwiper<T extends IImage>({ images, isButtonOn }: IVMSwiperProps<T>) {

  const navigate = useNavigate()

  React.useEffect(() => {
  })

  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        loopedSlides={10}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

        {(images || []).map((image) => {
          return (
            <SwiperSlide key={image.id}>
              <img src={process.env.REACT_APP_API_URL + '/' + image.img_path} />
              {isButtonOn ?
                // <button style={{ position: "absolute" }}>123</button>
                <button style={{ position: "absolute" }} className="hero-content__btn site-btn" onClick={()=>{navigate((image as ISlider).url as string)}}>{(image as ISlider).btn_text}</button> 
                : <></>
              }

            </SwiperSlide>
          )
        })}
      </Swiper>
    </>

  );
}
