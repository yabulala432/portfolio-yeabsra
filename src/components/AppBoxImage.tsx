import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import ImageCarousel from "./ImageCarousel";

interface props {
  images: string[];
  usedTechnologies: string;
  url: string;
  type: string;
  title: string;
}

function AppBoxImage({ images, usedTechnologies, url, type, title }: props) {
  return (
    <Card
      bgColor={"#2c2c6c"}
      borderRadius={0}
      border={"1px solid #2c2c6c"}
      borderTopRadius={"35px"}
      maxW="350px"
      transition={"transform 1.5s"}
      _hover={{
        transition: "transform 1.5s",
        bgColor: "transparent",
        border: "1px solid #49a7ec",
      }}
    >
      <CardBody>
        <VStack>
          <ImageCarousel
            imageWidth="330px"
            imageHeight="200px"
            images={images}
            imageStyle={{ borderRadius: "30px" }}
          />
          <Stack align={"center"} mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text color={"#4db5ff"} fontSize={"sm"} fontWeight={"bold"}>
              {usedTechnologies}
            </Text>
            <Text color={"#4db5ff"} fontSize={"sm"} fontWeight={"bold"}>
              {type}
            </Text>
          </Stack>
        </VStack>
      </CardBody>
      <CardFooter justify={"center"}>
        <Button
          variant="outline"
          color={"#4db5ff"}
          borderColor={"#4db5ff"}
          _hover={{
            bgColor: "#4db5ff",
            color: "#FFF",
            borderColor: "#4db5ff",
          }}
          onClick={() => window.open(url, "_blank")}
        >
          Github
        </Button>
      </CardFooter>
    </Card>
  );
}

export default AppBoxImage;
