import {Flex, Text, Heading, Image, Box} from "@chakra-ui/react"
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
                     <Flex h="245px" >
                        <Image borderLeftRadius="8px"  w="50%" src={game.image} alt={game.title}></Image>
                        <Box pr={4} pl={4} pt={8} w="100%">
                            <Heading fontSize="28px" fontWeight="semibold">{game.title}</Heading>
                            <Flex>
                                {game.tags.map( (tag) => (
                                    <Text key={tag} fontSize="20px" fontWeight="normal" opacity={0.5}>{tag},&nbsp;</Text>
                                ))}
                            </Flex>
                         
                            <Heading fontSize="40px" fontWeight="bold" align="right">${game.price}</Heading>
                        </Box>
                     </Flex>
                     
                </Box>
               
            ))}   
        </Flex>
    )
}