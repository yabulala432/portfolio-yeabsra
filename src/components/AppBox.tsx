import React from "react";
import { Box } from "@chakra-ui/react";
import color from "../config/color";

interface props {
  children: React.ReactNode;
  props?: any;
}

function AppBox({ children, props }: props) {
  return (
    <Box
      bgColor={color.primary}
      borderRadius={"5%"}
      h={"100%"}
      w={"100%"}
      p={5}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      color={"white"}
      transition={"all 1s ease-in-out"}
      _hover={{
        boxShadow: "0 0 0px 1px #FFF",
        transition: "all 1.5s ease-in-out",
        bgColor: "transparent",
        border: "1px solid #FFF",
        transform: "scale(1.1)",
      }}
      {...props}
    >
      {children}
    </Box>
  );
}

export default AppBox;
