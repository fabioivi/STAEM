import { Flex, Spacer, Button, Heading, Image} from "@chakra-ui/react"

export function Header(){
    return (
        <Flex pl="52.3px" pr="52.3px"  h="132px" align="center" bg="brand.darkblue" color="brand.white">
            <Heading  fontWeight="Bold" fontSize="40px" lineHeight="38.24px" zIndex={2}>STAEM</Heading>
            <Spacer />
            <Button
                leftIcon={<Image src="/assets/Install.svg" alt="install icon"  />}
                bg="#214B6B" 
                w="153px" 
                h="40px" 
                borderRadius="30px" 
                fontFamily="Noto Sans" 
                fontSize="16px" 
                lineHeight="15.3px"
                fontWeight="Bold" 
            >
            Install
            </Button>
        </Flex>
    )
}