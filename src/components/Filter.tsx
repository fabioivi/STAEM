import { debounce } from "lodash" 
import { Flex, Box, Heading, Input, Select, Spacer } from "@chakra-ui/react";
import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";

interface TFilter {
  filter: {
    search: string;
    sort: "title" | "price";
  };
  setFilter: (filter: any) => void;
}

export function Filter({ filter, setFilter }: TFilter) {

  const handleSearch = debounce( (data: any) => {
    setFilter({ search: data.search, sort: data.sort });
  }, 600);

  return (
    <Box alignItems="center" pt="40px" pb="40px" bg="brand.darkblue">
      <Flex alignItems="center">
        <Box h="10px" w="51px" borderRadius="20px" bg="#214B6B"></Box>
        <Heading
          ml="18px"
          mr="12px"
          color="brand.white"
          fontFamily="Noto Sans"
          fontSize={{ base: "28px", md: "36px" }}
          lineHeight="34.42px"
          fontWeight="Bold"
          whiteSpace="nowrap"
          zIndex={2}
        >
          New & Trending
        </Heading>
        <Box
          h="10px"
          w={{ base: "100%", md: "127px" }}
          borderRadius="20px"
          bg="#214B6B"
        ></Box>
      </Flex>

      <Flex
        direction={{ base: "column", md: "row" }}
        mt={{ base: "28px", md: "35px" }}
        pl={{ base: "25px", md: "68px" }}
        pr={{ base: "25px", md: "68px" }}
      >
        <Input
          bg="#1A3A53"
          borderColor="#1A3A53"
          borderRadius="30px"
          width={{ base: "", md: "273px" }}
          h="40px"
          type="text"
          placeholder="Search"
          color="white"
          pl="23px"
          pr="23px"
          onChange={(e) =>
            handleSearch({ search: e.target.value, sort: filter.sort })
          }
        />
        <Spacer />
        <Flex alignItems="center" mt={{ base: "20px", md: "0px", lg: "0px" }}>
          <Heading
            mr={{ base: "10px", md: "23px" }}
            color="brand.white"
            fontFamily="Noto Sans"
            fontSize="16px"
            lineHeight="34.42px"
            fontWeight="semibold"
            whiteSpace="nowrap"
          >
            Sort by:
          </Heading>
          <Select
            borderRadius="30px"
            width={{ base: "100%", md: "273px" }}
            h="40px"
            name=""
            id=""
            bg="#1A3A53"
            borderColor="#1A3A53"
            color="white"
            onChange={(e) =>
              handleSearch({ search: filter.search, sort: e.target.value })
            }
            value={filter.sort}
          >
            <option style={{ color: "black" }} value="price">
              Price
            </option>
            <option style={{ color: "black" }} value="title">
              Name
            </option>
          </Select>
        </Flex>
      </Flex>
    </Box>
  );
}
