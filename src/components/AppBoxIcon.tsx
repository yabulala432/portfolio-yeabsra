import React from "react";
import {
  //   Card,
  //   CardHeader,
  //   CardBody,
  //   CardFooter,
  //   Button,
  //   Heading,
  //   SimpleGrid,
  //   Text,
  Grid,
} from "@chakra-ui/react";
import AppText from "./AppText";
import AppBox from "./AppBox";

interface props {
  icon: React.ReactNode;
  title: string;

  subtitle: string;
  footer: string;
}

function AppBoxIcon({ title, icon, subtitle, footer }: props) {
  return (
    <AppBox>
      <Grid
        templateColumns={"repeat(1, 1fr)"}
        templateRows={"repeat(1, 1fr)"}
        gap={5}
      >
        <Grid
          row={0.5}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          //   bgColor={"blue"}
        >
          {icon}
        </Grid>
        <Grid
          //   rowSpan={1.5}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          overflow={"clip"}
          w={"100%"}
          //   bgColor={"red"}
        >
          <AppText fontSize={"xl"} fontWeight={"bold"}>
            {title}
          </AppText>
          <AppText fontSize="sm" fontWeight="normal" color="#94c7fc">
            {subtitle}
          </AppText>
          <AppText
            fontSize="11px"
            fontStyle="italic"
            fontWeight="normal"
            color="#94c7fc"
          >
            {footer}
          </AppText>
        </Grid>
      </Grid>
    </AppBox>
    // <SimpleGrid
    //   spacing={4}
    //   templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
    // >
    //   <Card
    //     display={"flex"}
    //     justifyContent={"center"}
    //     alignItems={"center"}
    //     flexDirection={"column"}
    //     width={"240px"}
    //     height={"200px"}
    //     borderTopRadius={"15%"}
    //   >
    //     <CardHeader>{icon}</CardHeader>
    //     <CardBody>
    //       <Heading textAlign={"center"} size="md">
    //         {title}
    //       </Heading>
    //       <AppText fontSize="sm" fontWeight="normal" color="#94c7fc">
    //         {subtitle}
    //       </AppText>
    //       <AppText
    //         fontSize="11px"
    //         fontStyle="italic"
    //         fontWeight="normal"
    //         color="#94c7fc"
    //       >
    //         {footer}
    //       </AppText>
    //     </CardBody>
    //   </Card>
    // </SimpleGrid>
  );
}

export default AppBoxIcon;
