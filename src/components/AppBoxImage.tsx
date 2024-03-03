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
import color from "../config/color";

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
      bgColor={color.primary}
      border={`1px solid ${color.primary}`}
      borderRadius={0}
      borderTopRadius={"35px"}
      maxW="350px"
      overflow={"hidden"}
      transition={"transform 1.5s"}
      _hover={{
        transition: "transform 1.5s",
        bgColor: "transparent",
        border: `1px solid #FFF`,
      }}
    >
      <CardBody>
        <VStack>
          <ImageCarousel
            imageHeight="200px"
            images={images}
            imageStyle={{
              borderTopLeftRadius: "15px",
              borderTopRightRadius: "15px",
              borderBottomLeftRadius: "30px",
              borderBottomRightRadius: "30px",
            }}
            imageWidth="330px"
          />
          <Stack align={"center"} mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text color={color.textColor} fontSize={"sm"} fontWeight={"bold"}>
              {usedTechnologies}
            </Text>
            <Text color={color.textColor} fontSize={"sm"} fontWeight={"bold"}>
              {type}
            </Text>
          </Stack>
        </VStack>
      </CardBody>
      <CardFooter justify={"center"}>
        <Button
          borderColor={color.textColor}
          color={color.textColor}
          variant="outline"
          onClick={() => window.open(url, "_blank")}
          _hover={{
            bgColor: color.textColor,
            color: "white",
            borderColor: color.textColor,
          }}
        >
          Github
        </Button>
      </CardFooter>
    </Card>
  );
}

export default AppBoxImage;
