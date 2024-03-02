import React from "react";
import { Box } from "@chakra-ui/react";

interface props {
  children: React.ReactNode;
  props?: any;
}

function AppBox({ children, props }: props) {
  return (
    <Box
      bgColor={"#2c2c6c"}
      borderRadius={"5%"}
      h={"100%"}
      w={"100%"}
      p={5}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      color={"white"}
      // boxShadow={"0 0 1px 1px #FFF"}
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
