import { Box, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "@chakra-ui/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";

import { Navigation, Pagination } from "swiper";

export function Slider() {
  const [isLargerThan1280] = useMediaQuery("(min-width: 960px)");
  const slides = isLargerThan1280 ? 2 : 1;
  return (
    <Box bg="#1B2837" zIndex={-1}>
      {/* <Box
        position="absolute"
        width="867px"
        height="346px"
        left="228px"
        top="114px"
        bg="#4D6E95"
        borderRadius="100px"
        margin="0 auto"
        filter="blur(370px)"
        zIndex={1}
      >
      </Box> */}

      <Swiper
        modules={[Navigation, Pagination]}
        // navigation
        pagination={{ clickable: true }}
        slidesPerView={slides}
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
          <Image src="https://cdn.akamai.steamstatic.com/steam/apps/1446780/header.jpg?t=1647883081" />
        </SwiperSlide>

        <SwiperSlide>
          <Image src="https://cdn.akamai.steamstatic.com/steam/apps/1599340/header.jpg?t=1651157265" />
        </SwiperSlide>

        <SwiperSlide>
          <Image src="https://cdn.akamai.steamstatic.com/steam/apps/1021100/header.jpg?t=1650647590" />
        </SwiperSlide>

        <SwiperSlide>
          <Image src="https://cdn.akamai.steamstatic.com/steam/apps/1133760/header.jpg?t=1649772146" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
