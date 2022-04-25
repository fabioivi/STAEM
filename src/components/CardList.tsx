import {Flex, Text, Heading, Image as ImageUi, Box} from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { api } from "../services/api";

const url = "https://gqkuommdmfzmwkzdewma.supabase.co/rest/v1/steam?select=*"
const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdxa3VvbW1kbWZ6bXdremRld21hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDkyNjQyNTIsImV4cCI6MTk2NDg0MDI1Mn0.iF651HDhqynAQRlG8T6wFS3ZEx4dqxHiEiguc0m7-zI"
const authorizationKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWNyZXQiOiJiNjcwZDRjMWE5Zjc1YzdkN2VmMGVjODEiLCJpYXQiOjE2NTA0MTMzOTd9.ma18KOvaDZlBpcoAPNgViS89df9m6GPhr0-FgRtv6Ec" 

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

type TGameList = TGame[]

export function CardList(){
    const [games, setGames] = useState<TGame[]>([])

    useEffect(() => {
        const getGames = async () => {
            const response = await api.get<TGameList>(`${url}`, {
                headers: {
                    apikey: apikey,
                    Authorization: `Bearer ${authorizationKey}`
                }
            })
    
            const { data } = response
            console.log(data)
            setGames(data)
        }
        getGames()
    }, [])

    return(
        <Flex direction={"column"} bg="brand.darkblue" color="brand.white">
            {games.map (game => (
                <Box key={game.id} m={6} borderRadius='lg' bg="#17202D">
                     <Flex h="245px">
                        <ImageUi borderLeftRadius="8px"  w="50%" src={game.image} alt={game.title}></ImageUi>
                        <Flex justifyContent="space-between" pr={4} pl={4} pt={10} pb={5} w="100%" pos="relative">
                            <Box>
                                <Heading fontSize="28px" fontWeight="semibold">{game.title}</Heading>
                                <Flex wrap="wrap">
                                    {game.tags.map( (tag, id) => {
                                        const separator = (id === game.tags.length - 1) ? "" : "," 
                                        return <Text key={tag} fontSize="20px" fontWeight="normal" opacity={0.5}>{tag+separator}&nbsp;</Text>
                                    })
                                    }
                                </Flex>
                                <Box mt="25px" h="10px" w="217px" borderRadius="20px" bg="#214B6B" >
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
        </Flex>
    )
}