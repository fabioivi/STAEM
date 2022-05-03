import {Flex, Box, Heading, Input, Select, Spacer, Option} from "@chakra-ui/react"

export function Filter(){
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
                <Input bg="#1A3A53" borderColor="#1A3A53" borderRadius="30px" width="273px" h="40px" type="text" placeholder="Search" color='white' pl="23px" pr="23px"/>
                <Spacer />
                <Heading mr="23px"
                    color="brand.white" 
                    fontFamily="Noto Sans" 
                    fontSize="16px" 
                    lineHeight="34.42px"
                    fontWeight="semibold">
                        Sort by:
                </Heading>
                <Select  borderRadius="30px" width="273px" h="40px" name="" id="" bg="#1A3A53" borderColor="#1A3A53" color='white'>
                    <option style={{ color: 'black' }} value='option1'>Price</option>
                    <option style={{ color: 'black' }} value='option1'>Name</option>
                </Select>
            </Flex>
        </Box>
    )
}