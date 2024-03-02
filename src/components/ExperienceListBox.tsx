import { Grid, GridItem, HStack, VStack } from "@chakra-ui/react";
import { HiBadgeCheck } from "react-icons/hi";

import AppBox from "./AppBox";
import AppText from "./AppText";

interface props {
  title: string;
  experiences: experience[];
}

export interface experience {
  technology: string;
  experienceLevel: "Beginner" | "Intermediate" | "Experienced" | "Expert";
}

function ExperienceListBox({ title, experiences }: props) {
  return (
    <AppBox
      props={{
        width: "550px",
        height: "390px",
        bgImage: "linear-gradient(45deg, #2c2c6c, #4db5ff)",
        _hover: {
          boxShadow: "0 0 0px 1px #FFF",
          transition: "all 1.5s ease-in-out",
          bgImage: "linear-gradient(45deg, #4db5ff, #2c2c6c)",
          border: "1px solid #FFF",
          transform: "scale(1.1)",
        },
      }}
    >
      <VStack spacing={7} align="center" justify="center" h="100%" w="100%">
        <AppText fontWeight="bold" fontSize="2xl" color="#fff">
          {title}
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
          overflowY="scroll"
        >
          {experiences.map(({ technology, experienceLevel }, index) => (
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
