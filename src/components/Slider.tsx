import { Box, Image, LinkBox, LinkOverlay} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "@chakra-ui/react";
import Link from "next/link"

import { Navigation, Pagination, Autoplay} from "swiper";
import { useEffect, useState } from "react";
import { supabase } from "../services/api";
import { SkeletonSlider } from "./SkeletonSlider";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "swiper/css/scrollbar";

interface TGame {
  id: number;
  title: string;
  image: string;
  price: number;
  plataforms: string[];
  tags: string[];
  link: string;
  genre: string;
}

type TGameList = TGame[] | null;

const sliderGames = [
  "ELDEN RING",
  "MONSTER HUNTER RISE",
  "CHRONO CROSS: THE RADICAL DREAMERS EDITION",
  "THE KING OF FIGHTERS XV",
  "Neon Flash 2"
]

export function Slider() {
  const [games, setGames] = useState<TGameList>([]);
  const [loading, setLoading] = useState(false);

  const [isLargerThan1280] = useMediaQuery("(min-width: 960px)");
  const qtdSlides = isLargerThan1280 ? 2 : 1;

  useEffect(() => {
    const getGames = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("steam")
          .select("*")
          .in("title", sliderGames)
          .order("title", { ascending: true })

        setLoading(false);
        setGames(data);
        console.log(data);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    getGames();
  }, []);

  if (loading){
    return <SkeletonSlider />
  }
  
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
        modules={[Navigation, Pagination, Autoplay]}
        // navigation
        pagination={{ clickable: true }}
        slidesPerView={qtdSlides}
        spaceBetween={8}
        centeredSlides={true}
        grabCursor={true}
        loop={true}
        className="mySwiper"
        // loopedSlides={1}
        initialSlide={2}
        autoplay={true}
      >
        {
          games?.map( (game) => (
              <SwiperSlide key={game.id}>
                <Link href={game.link} passHref>
                  <Image src={game.image} alt={game.title} />
                </Link>
              </SwiperSlide>
          ))
        }
      </Swiper>
    </Box>
  );
}
