import { Flex, Spacer, Button, Heading } from "@chakra-ui/react"
export function Header(){
    return (
        <Flex p="4">
            <Heading>STAEM</Heading>
            <Spacer />
            <Button>Install</Button>
        </Flex>
    )
}