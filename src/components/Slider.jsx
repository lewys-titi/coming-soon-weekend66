import SwiperCore, { Navigation, Pagination, A11y, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import luxury from '../assets/luxury.jpg'; 
import illu2 from '../assets/illu2.jpg';
import illu3 from '../assets/illu3.jpg';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/effect-fade/effect-fade.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y, EffectFade, Autoplay]);

export default function Slider(){
  
  return (
    
    <Swiper
      effect="fade"
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{delay: 2500, disableOnInteraction: false}}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="min-w-full overflow-hidden"
      loop={true}
    >
      <SwiperSlide key="1" className="h-full"><img src={luxury} alt="test" className="h-full w-full md:min-w-full object-cover"/></SwiperSlide>
      <SwiperSlide key="2" className="h-full"><img src={illu2} alt="test" className="h-full w-full md:min-w-full object-cover"/></SwiperSlide>
      <SwiperSlide key="3" className="h-full"><img src={illu3} alt="test"className="h-full w-full md:min-w-full object-cover"/></SwiperSlide>
    </Swiper>
    
  );
};