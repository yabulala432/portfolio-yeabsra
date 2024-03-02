import { Grid, GridItem, HStack, VStack, position } from "@chakra-ui/react";
import { HiBadgeCheck } from "react-icons/hi";

import AppBox from "./AppBox";
import AppText from "./AppText";
import { CgOverflow } from "react-icons/cg";

interface props {
  experiences: experience[];
}

export interface experience {
  technology: string;
  experienceLevel: "Beginner" | "Intermediate" | "Experienced" | "Expert";
}

function ExperienceListBox({ experiences: data }: props) {
  return (
    <AppBox
      props={{
        width: "550px",
        maxHeight: "390px",
      }}
    >
      <VStack spacing={7} align="center" justify="center" h="100%" w="100%">
        <AppText fontWeight="bold" fontSize="2xl" color="#4db5ff">
          Frontend Development
        </AppText>
        <Grid
          alignItems={"center"}
          pl={5}
          pr={5}
          w={"100%"}
          h={"85%"}
          templateColumns={"repeat(2, 1fr)"}
          gap={6}
          flexGrow={1}
          // bgColor={"red"}
          overflowY="scroll"
        >
          {data.map(({ technology, experienceLevel }, index) => (
            <GridItem w="100%" h="10" key={index}>
              <HStack gap={4}>
                <HiBadgeCheck color="#4db5ff" size={25} />
                <VStack alignItems={"flex-start"} gap={0} columnGap={0}>
                  <AppText fontWeight="bold" fontSize="md">
                    {technology}
                  </AppText>
                  <AppText fontStyle="italic" fontSize="sm">
                    {experienceLevel}
                  </AppText>
                </VStack>
              </HStack>
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </AppBox>
  );
}

export default ExperienceListBox;
