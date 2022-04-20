import {Flex, Text, Image, Box} from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { api } from "../services/api";

const url = "https://gqkuommdmfzmwkzdewma.supabase.co/rest/v1/steam?select=*"
const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdxa3VvbW1kbWZ6bXdremRld21hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDkyNjQyNTIsImV4cCI6MTk2NDg0MDI1Mn0.iF651HDhqynAQRlG8T6wFS3ZEx4dqxHiEiguc0m7-zI"
const authorizationKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWNyZXQiOiJiNjcwZDRjMWE5Zjc1YzdkN2VmMGVjODEiLCJpYXQiOjE2NTA0MTMzOTd9.ma18KOvaDZlBpcoAPNgViS89df9m6GPhr0-FgRtv6Ec" 

export function CardList(){
    const [games, setGames] = useState([])

    useEffect(() => {
        const getGames = async () => {
            const response = await api.get(`${url}`, {
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
    })

    return(
        <Flex direction={"column"}>
            {games.map (game => (
                <Box key={game.id} >
                     <Text>{game.title} </Text>
                     <Image src={game.image}></Image>
                </Box>
            ))
            }   
        </Flex>
    )
}