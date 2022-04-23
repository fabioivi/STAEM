import { Flex, Spacer, Button, Heading } from "@chakra-ui/react"

export function Header(){
    return (
        <Flex p="4" bg="brand.darkblue" color="brand.white">
            <Heading>STAEM</Heading>
            <Spacer />
            <Button>Install</Button>
        </Flex>
    )
}