import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import luxury from '../assets/luxury.jpg'; 
import illu2 from '../assets/illu2.jpg';
import illu3 from '../assets/illu3.jpg';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y]);

export default function Slider(){
  
  return (
    
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="min-w-full overflow-hidden"
    >
      <SwiperSlide key="1" className="h-full"><img src={luxury} alt="test" className=" h-full object-cover"/></SwiperSlide>
      <SwiperSlide key="2" className="h-full"><img src={illu2} alt="test" className="h-full object-cover"/></SwiperSlide>
      <SwiperSlide key="3" className="h-full"><img src={illu3} alt="test"className=" h-full object-cover"/></SwiperSlide>
    </Swiper>
    
  );
};