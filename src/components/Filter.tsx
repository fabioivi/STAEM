import { useState} from "react"
import {Flex, Box, Heading, Input, Select, Spacer} from "@chakra-ui/react"

interface TFilter {
    filter: {
        search: string,
        sort: "title" | "price",
        count: number
    }
    setFilter: (filter: any ) => void
}

export function Filter({filter, setFilter}: TFilter){

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("search:"+ event.target.value)
        setFilter({ search: event.target.value, sort: "price" })
     };

    return (
        <Box alignItems="center" pt="40px" pb="40px" bg="brand.darkblue">
            <Flex alignItems="center" >
                <Box h="10px" w="51px" borderRadius="20px" bg="#214B6B"></Box>
                <Heading ml="18px" mr="12px"
                    color="brand.white" 
                    fontFamily="Noto Sans" 
                    fontSize="36px" 
                    lineHeight="34.42px"
                    fontWeight="Bold">
                    New & Trending
                </Heading>
                <Box h="10px" w="127px" borderRadius="20px" bg="#214B6B"></Box>
            </Flex>
        
            <Flex  mt="35px" pl="68px" pr="68px" >
                <Input bg="#1A3A53" borderColor="#1A3A53" borderRadius="30px" width="273px" h="40px" type="text" placeholder="Search" color='white' pl="23px" pr="23px"
                    onChange={e => setFilter({ search: e.target.value, sort: filter.sort, count: filter.count })}
                />
                <Spacer />
                <Heading mr="23px"
                    color="brand.white" 
                    fontFamily="Noto Sans" 
                    fontSize="16px" 
                    lineHeight="34.42px"
                    fontWeight="semibold">
                        Sort by:
                </Heading>
                <Select  borderRadius="30px" width="273px" h="40px" name="" id="" bg="#1A3A53" borderColor="#1A3A53" color='white'
                    onChange={e => setFilter({ search: filter.search, sort: e.target.value, count: filter.count })}
                    value={filter.sort}
                >
                    <option style={{ color: 'black' }} value='price'>Price</option>
                    <option style={{ color: 'black' }} value='title'>Name</option>
                </Select>
            </Flex>
        </Box>
    )
}