import React from "react";

import { HStack, VStack } from "@chakra-ui/react";

import ExperienceListBox, { experience } from "../components/ExperienceListBox";
import AppText from "../components/AppText";

const frontEnd: experience[] = [
  {
    technology: "HTML",
    experienceLevel: "Experienced",
  },
  {
    technology: "CSS",
    experienceLevel: "Intermediate",
  },
  {
    technology: "JavaScript",
    experienceLevel: "Intermediate",
  },
  {
    technology: "React",
    experienceLevel: "Intermediate",
  },
  {
    technology: "React Native",
    experienceLevel: "Intermediate",
  },
  {
    technology: "TypeScript",
    experienceLevel: "Intermediate",
  },
];

const backEnd: experience[] = [
  {
    technology: "Node.js",
    experienceLevel: "Intermediate",
  },
  {
    technology: "Express",
    experienceLevel: "Intermediate",
  },
  {
    technology: "NestJS",
    experienceLevel: "Intermediate",
  },
  {
    technology: "MongoDB",
    experienceLevel: "Intermediate",
  },
  {
    technology: "SQL",
    experienceLevel: "Intermediate",
  },
  {
    technology: "RESTful APIs",
    experienceLevel: "Intermediate",
  },
];

function Experience() {
  return (
    <VStack spacing={10} align="center" justify="center">
      <AppText fontWeight="bold" fontSize="2xl" color="#4db5ff">
        My Experiences
      </AppText>
      <HStack justify={"center"} spacing={4} wrap={"wrap"}>
        <ExperienceListBox title="Front-End Dev" experiences={frontEnd} />
        <ExperienceListBox title="Back-End Dev" experiences={backEnd} />
      </HStack>
    </VStack>
  );
}

export default Experience;
