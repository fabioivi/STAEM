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

import { Card } from "../components/Card";

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
      {games && games.map((game) => <Card key={game.id} {...game} />)}
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
