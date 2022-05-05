import { Grid, Skeleton } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
const startColor = "#0e141d";
const endColor = "#17202D";

export function SkeletonSlider(){
    const [isLargerThan1280] = useMediaQuery("(min-width: 960px)");

    if (isLargerThan1280)
        return (
            <Grid pt="30px" pb="30px" bg="#1B2837" templateColumns='1fr 2.5fr 1fr' gap={6} alignItems="center">
                <Skeleton borderRightRadius="30px" startColor={startColor} endColor={endColor} opacity={0.4} h={"300px"}></Skeleton>
                <Skeleton borderRadius="30px" startColor={startColor} endColor={endColor} h={"25vw"}></Skeleton>
                <Skeleton borderLeftRadius="30px" startColor={startColor} endColor={endColor} opacity={0.4} h={"300px"}></Skeleton>
            </Grid>
        )
    else{
        return (
            <Grid bg="#1B2837" templateColumns='1fr' gap={6} alignItems="center" p="20px">
                <Skeleton borderRadius="30px" startColor={startColor} endColor={endColor} h={"45vw"}></Skeleton>
            </Grid>
        )
    }
}