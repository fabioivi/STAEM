import { Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";

import { Navigation, Pagination } from "swiper";

export function Slider() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      // navigation
      pagination={{ clickable: true }}
      slidesPerView={2}
      spaceBetween={150}
      centeredSlides={true}
      grabCursor={true}
      loop={true}
      className="mySwiper"
    >
      <SwiperSlide>
        <Image src="https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg?t=1649774637" />
      </SwiperSlide>

      <SwiperSlide>
        <Image src="https://cdn.akamai.steamstatic.com/steam/apps/1021100/header.jpg?t=1650647590" />
      </SwiperSlide>

      <SwiperSlide>
        <Image src="https://cdn.akamai.steamstatic.com/steam/apps/1133760/header.jpg?t=1649772146" />
      </SwiperSlide>

      <SwiperSlide>
        <Image src="https://cdn.akamai.steamstatic.com/steam/apps/1133760/header.jpg?t=1649772146" />
      </SwiperSlide>

      <SwiperSlide>
        <Image src="https://cdn.akamai.steamstatic.com/steam/apps/1133760/header.jpg?t=1649772146" />
      </SwiperSlide>
    </Swiper>
  );
}
