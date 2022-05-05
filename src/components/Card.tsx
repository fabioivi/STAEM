import { Flex, Text, Heading, Image as ImageUi, Box, LinkBox, LinkOverlay, border} from "@chakra-ui/react";

interface TCardProps {
  id: number;
  title: string;
  image: string;
  price: number;
  plataforms: string[];
  tags: string[];
  link: string;
  genre: string;
}

export function Card({
  id,
  title,
  image,
  price,
  plataforms,
  tags,
  link,
  genre,
}: TCardProps) {
  return (
      <LinkBox
        _hover={{ 
          transform: "scale(1.05)", 
          transition: "0.4s all",
          bg: "#101720"
        }}
        key={id}
        mr={{ base: "25px", lg: "68px" }}
        ml={{ base: "25px", lg: "68px" }}
        mt={{ base: "0px", lg: "20px" }}
        mb="20px"
        borderRadius="30px"
        bg="#17202D"
      >
        <Flex
          h={{ base: "100%", lg: "245px" }}
          flexDirection={{ base: "column", lg: "row" }}
        >
          <ImageUi
            borderLeftRadius={{ base: "0px", lg: "30px" }}
            borderTopRightRadius={{ base: "30px", lg: "0px" }}
            borderTopLeftRadius="30px"
            w={{ base: "100%", lg: "50%" }}
            h={{ base: "280px", lg: "100%" }}
            src={image}
            alt={title}
            objectFit="cover"
          ></ImageUi>
          <Flex
            flexDirection={{ base: "column", lg: "row" }}
            justifyContent="space-between"
            pl={{ base: "20px", lg: "51px" }}
            pt={{ base: "20px", lg: "53px" }}
            pb={{ base: "20px", lg: "34px" }}
            pr={{ base: "20px", lg: "34px" }}
            w="100%"
            pos="relative"
          >
            <Box>
              <Heading fontSize="28px" fontWeight="semibold" lineHeight="26.77px">
                <LinkOverlay href={link}>
                  {title}
                </LinkOverlay>
              </Heading>
              <Flex wrap="wrap" mt="12px">
                {tags.map((tag, id) => {
                  const separator = id === tags.length - 1 ? "" : ",";
                  return (
                    <Text
                      key={tag}
                      fontSize="20px"
                      lineHeight="19.12px"
                      fontWeight="normal"
                      opacity={0.5}
                    >
                      {tag + separator}&nbsp;
                    </Text>
                  );
                })}
              </Flex>
              <Box
                mt="25px"
                h="10px"
                w="127px"
                borderRadius="20px"
                bg="#214B6B"
              ></Box>
            </Box>
            <Box
              d="flex"
              justifyContent="space-between"
              flexDirection={{ base: "row", lg: "column" }}
              alignItems="flex-end"
            >
              <ImageUi src="/assets/Square.svg" w="40px" alt="Square"></ImageUi>
              <Heading fontSize="40px" fontWeight="bold">
                ${price}
              </Heading>
            </Box>
          </Flex>
        </Flex>
      </LinkBox>
  );
}
