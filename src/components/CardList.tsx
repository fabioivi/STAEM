import {Flex, Text, Heading, Image as ImageUi, Box, Spinner} from "@chakra-ui/react"
import { useEffect, useState, useRef} from "react";
import { supabase }  from "../services/api";

interface TGame {
    id: number
    title: string
    image: string
    price: number
    plataforms: string[]
    tags: string[]
    link: string
    genre: string
}

type TGameList = TGame[] | null

interface TFilter {
    filter: {
        search: string,
        sort: "title" | "price",
        count: number
    }
    setFilter: (filter: any ) => void
}

export function CardList({filter, setFilter}: TFilter){
    const loadMoreRef = useRef(null)

    const [games, setGames] = useState<TGameList>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getGames = async () => {
            try{
                console.log("filter:"+filter.search)
                console.log("sort:"+filter.sort)
                console.log("count:"+filter.count)
                const {data, error} = await supabase.from("steam").select("*").ilike("title",`%${filter.search}%`).order(`${filter.sort}`, { ascending: true }).limit(filter.count)
                console.log(data)
                setGames(data)
            }catch (error){
                console.log(error)
            }
        }
        getGames()
        setLoading(false);
    }, [filter.search, filter.sort, filter.count])

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "20px",
            threshold: 1.0
        };

        const observer = new IntersectionObserver((entities) => {
            const target = entities[0];
      
            if (target.isIntersecting){
                setLoading(true);
                const newCount = filter.count + 2
                console.log("carregando : " +  newCount)
                setFilter({ search: filter.search, sort: filter.sort, count: newCount});
            }
        }, options);

        if (loadMoreRef.current){
            observer.observe(loadMoreRef.current);
        }
    }, [])

    return(
        <Flex direction={"column"} bg="brand.darkblue" color="brand.white">
            {games && games.map (game => (
                <Box key={game.id} mr="68px" ml="68px" mt="20px" mb="20px" borderRadius="30px" bg="#17202D">
                     <Flex h="245px">
                        <ImageUi borderLeftRadius="30px" w="50%" src={game.image} alt={game.title}></ImageUi>
                        <Flex justifyContent="space-between" pl="51px" pt="53px" pb="34px" pr="34px" w="100%" pos="relative">
                            <Box>
                                <Heading fontSize="28px" fontWeight="semibold" lineHeight="26.77px" >{game.title}</Heading>
                                <Flex wrap="wrap" mt="12px">
                                    {
                                        game.tags.map( (tag, id) => {
                                            const separator = (id === game.tags.length - 1) ? "" : "," 
                                            return <Text key={tag} fontSize="20px"  lineHeight="19.12px" fontWeight="normal" opacity={0.5}>{tag+separator}&nbsp;</Text>
                                        })
                                    }
                                </Flex>
                                <Box mt="25px" h="10px" w="127px" borderRadius="20px" bg="#214B6B" >
                                </Box>
                            </Box>
                            <Box d="flex" justifyContent="space-between" flexDirection="column" alignItems="flex-end">
                                <ImageUi src="/assets/Square.svg" w="40px" alt="Square"></ImageUi>
                                <Heading fontSize="40px" fontWeight="bold">${game.price}</Heading>
                            </Box>
                        </Flex>
                     </Flex>
                </Box>
            ))}
            <Flex alignItems="center" justifyContent="center" p="50px" ref={loadMoreRef}>
                {
                    loading && 
                    <Spinner 
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="rgba(255, 255, 255, 0.5)"
                        color="brand.white"
                        size="xl">
                    </Spinner>
                }
            </Flex>  
        </Flex>
    )
}