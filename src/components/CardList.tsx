import {
  Flex,
  Text,
  Heading,
  Image as ImageUi,
  Box,
  Spinner,
} from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import { supabase } from "../services/api";

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

interface TFilter {
  filter: {
    search: string;
    sort: "title" | "price";
  };
  setFilter: (filter: any) => void;
}

export function CardList({ filter, setFilter }: TFilter) {
  const loadMoreRef = useRef(null);

  const [games, setGames] = useState<TGameList>([]);
  const [page, setPage] = useState(5);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getGames = async () => {
      try {
        console.log("filter:" + filter.search);
        console.log("sort:" + filter.sort);
        console.log(page);
        const { data, error } = await supabase
          .from("steam")
          .select("*")
          .ilike("title", `%${filter.search}%`)
          .order(`${filter.sort}`, { ascending: true })
          .order("title", { ascending: true })
          .limit(page);
        console.log(data);
        setGames(data);
      } catch (error) {
        console.log(error);
      }
    };
    getGames();
    setLoading(false);
  }, [filter.search, filter.sort, page]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entities) => {
      const target = entities[0];

      if (target.isIntersecting && loading !== true) {
        setLoading(true);
        setPage((_page) => _page + 1);
        console.log("carregando : " + page);
      }
    }, options);

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }
  }, []);

  return (
    <Flex direction={"column"} bg="brand.darkblue" color="brand.white">
      {games &&
        games.map((game) => (
          <Box
            key={game.id}
            mr={{ base: "25px", lg: "68px" }}
            ml={{ base: "25px", lg: "68px" }}
            mt="20px"
            mb="20px"
            borderRadius="30px"
            bg="#17202D"
          >
            <Flex
              h={{ base: "100%", lg: "245px" }}
              flexDirection={{ base: "column", lg: "row" }}
            >
              <ImageUi
                borderLeftRadius={{ base: "0px", lg: "30px" }}
                borderTopRightRadius={{ base: "30px", lg: "0px" }}
                borderTopLeftRadius="30px"
                w={{ base: "100%", lg: "50%" }}
                h={{ base: "280px", lg: "100%" }}
                src={game.image}
                alt={game.title}
                objectFit="cover"
              ></ImageUi>
              <Flex
                flexDirection={{ base: "column", lg: "row" }}
                justifyContent="space-between"
                pl={{ base: "20px", lg: "51px" }}
                pt={{ base: "20px", lg: "53px" }}
                pb={{ base: "20px", lg: "34px" }}
                pr={{ base: "20px", lg: "34px" }}
                w="100%"
                pos="relative"
              >
                <Box>
                  <Heading
                    fontSize="28px"
                    fontWeight="semibold"
                    lineHeight="26.77px"
                  >
                    {game.title}
                  </Heading>
                  <Flex wrap="wrap" mt="12px">
                    {game.tags.map((tag, id) => {
                      const separator = id === game.tags.length - 1 ? "" : ",";
                      return (
                        <Text
                          key={tag}
                          fontSize="20px"
                          lineHeight="19.12px"
                          fontWeight="normal"
                          opacity={0.5}
                        >
                          {tag + separator}&nbsp;
                        </Text>
                      );
                    })}
                  </Flex>
                  <Box
                    mt="25px"
                    h="10px"
                    w="127px"
                    borderRadius="20px"
                    bg="#214B6B"
                  ></Box>
                </Box>
                <Box
                  d="flex"
                  justifyContent="space-between"
                  flexDirection={{ base: "row", lg: "column" }}
                  alignItems="flex-end"
                >
                  <ImageUi
                    src="/assets/Square.svg"
                    w="40px"
                    alt="Square"
                  ></ImageUi>
                  <Heading fontSize="40px" fontWeight="bold">
                    ${game.price}
                  </Heading>
                </Box>
              </Flex>
            </Flex>
          </Box>
        ))}
      <Flex
        alignItems="center"
        justifyContent="center"
        p="60px"
        ref={loadMoreRef}
      >
        {loading && (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="rgba(255, 255, 255, 0.5)"
            color="brand.white"
            size="xl"
          ></Spinner>
        )}
      </Flex>
    </Flex>
  );
}
