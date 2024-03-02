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
}

function AppBoxImage({ images, usedTechnologies, url }: props) {
  return (
    <Card
      bgColor={"#2c2c6c"}
      borderRadius={2}
      borderTopRadius={"30px"}
      maxW="350px"
      transition={"transform 1.5s"}
      _hover={{
        transform: "scale(1.05)",
        transition: "transform 1.5s",
        bgColor: "transparent",
        border: "2px solid #4aaaef",
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
          <Stack mt="6" spacing="3">
            <Heading size="md">Pharmacy Management System</Heading>
            <Text>{usedTechnologies}</Text>
          </Stack>
        </VStack>
      </CardBody>
      <CardFooter justify={"center"}>
        <Button
          variant="outline"
          colorScheme="red"
          onClick={() => window.open(url, "_blank")}
        >
          Github
        </Button>
      </CardFooter>
    </Card>
  );
}

export default AppBoxImage;
