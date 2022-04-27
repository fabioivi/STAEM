import { Box, Heading, Image, Center} from "@chakra-ui/react";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { EffectFade, Navigation, Pagination } from "swiper";

export function Slider(){
    return (
       
        <Swiper
            slidesPerView={3}
            spaceBetween={70}
            navigation
            pagination
            className="mySwiper"
            >
                <SwiperSlide>
                    <Center
                        position="relative"
                        flexDir="column"
                        w="100%"
                        h="100%"
                        //overflow="hidden"
                        bg="white"
                    >
                        <Image
                            width="100%"
                            src=""
                            alt="slider image"
                            bgSize="cover"
                            bgAttachment="fixed"
                            bgRepeat="no-repeat"
                            src="https://cdn.akamai.steamstatic.com/steam/apps/1940190/header.jpg?t=1649487691"
                        /> 
                    </Center>   
                </SwiperSlide>

                <SwiperSlide>
                    <Center
                        position="relative"
                        flexDir="column"
                        w="100%"
                        h="100%"
                        overflow="hidden"
                        bg="white"
                    >
                        <Image
                            width="1000px"
                            src="https://cdn.akamai.steamstatic.com/steam/apps/1021100/header.jpg?t=1650647590"
                            alt="slider image"
                            bgSize="cover"
                            bgAttachment="fixed"
                            bgRepeat="no-repeat"
                        /> 
                    </Center>   
                </SwiperSlide>
                <SwiperSlide>
                    <Center
                        position="relative"
                        flexDir="column"
                        w="100%"
                        h="100%"
                        //overflow="hidden"
                        bg="white"
                    >
                        <Image
                            width="100%"
                            src=""
                            alt="slider image"
                            bgSize="cover"
                            bgAttachment="fixed"
                            bgRepeat="no-repeat"
                            src="https://cdn.akamai.steamstatic.com/steam/apps/1940190/header.jpg?t=1649487691"
                        /> 
                    </Center>   
                </SwiperSlide>
                
                <SwiperSlide>
                    <Center
                        position="relative"
                        flexDir="column"
                        w="100%"
                        h="100%"
                        //overflow="hidden"
                        bg="white"
                    >
                        <Image
                            width="100%"
                            src=""
                            alt="slider image"
                            bgSize="cover"
                            bgAttachment="fixed"
                            bgRepeat="no-repeat"
                            src="https://cdn.akamai.steamstatic.com/steam/apps/1940190/header.jpg?t=1649487691"
                        /> 
                    </Center>   
                </SwiperSlide>
                <SwiperSlide>
                    <Center
                        position="relative"
                        flexDir="column"
                        w="100%"
                        h="100%"
                        //overflow="hidden"
                        bg="white"
                    >
                        <Image
                            width="100%"
                            src=""
                            alt="slider image"
                            bgSize="cover"
                            bgAttachment="fixed"
                            bgRepeat="no-repeat"
                            src="https://cdn.akamai.steamstatic.com/steam/apps/1940190/header.jpg?t=1649487691"
                        /> 
                    </Center>   
                </SwiperSlide>
                <SwiperSlide>
                    <Center
                        position="relative"
                        flexDir="column"
                        w="100%"
                        h="100%"
                        //overflow="hidden"
                        bg="white"
                    >
                        <Image
                            width="100%"
                            src=""
                            alt="slider image"
                            bgSize="cover"
                            bgAttachment="fixed"
                            bgRepeat="no-repeat"
                            src="https://cdn.akamai.steamstatic.com/steam/apps/1940190/header.jpg?t=1649487691"
                        /> 
                    </Center>   
                </SwiperSlide>
            </Swiper>

    )
        
}
