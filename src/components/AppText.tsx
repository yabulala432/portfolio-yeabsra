import { Text } from "@chakra-ui/react";

interface props {
  children: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  fontStyle?: string;
}

function AppText({ children, color, fontSize, fontWeight, fontStyle }: props) {
  return (
    <Text
      fontStyle={fontStyle ? fontStyle : "normal"}
      fontSize={fontSize ? fontSize : "2xl"}
      color={color ? color : "#FFF"}
      fontWeight={fontWeight ? fontWeight : "normal"}
      textAlign={"center"}
      transition={"all 1s ease-in-out"}
      _hover={{
        color: "#FFF",
        transition: "all 1.5s ease-in-out",
      }}
    >
      {children}
    </Text>
  );
}

export default AppText;
