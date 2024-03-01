import React from "react";
import { Box } from "@chakra-ui/react";

interface props {
  children: React.ReactNode;
}

function AppBox({ children }: props) {
  return (
    <Box
      bgColor={"#D0722F"}
      borderRadius={"5%"}
      h={"100%"}
      w={"100%"}
      p={5}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      color={"white"}
      boxShadow={"0 0 1px 1px #FFF"}
      transition={"all 1s ease-in-out"}
      _hover={{
        boxShadow: "0 0 1px 1px #FFF",
        transition: "all 1.5s ease-in-out",
        bgColor: "transparent",
        border: "2px solid #FFF",
        transform: "scale(1.1)",
      }}
    >
      {children}
    </Box>
  );
}

export default AppBox;
