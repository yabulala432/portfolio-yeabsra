import { HStack, VStack } from "@chakra-ui/react";

import ExperienceListBox, { experience } from "../components/ExperienceListBox";
import AppText from "../components/AppText";
import color from "../config/color";

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
  {
    technology: "Angular",
    experienceLevel: "Intermediate",
  },
  {
    technology: "JavaScript",
    experienceLevel: "Intermediate",
  },
  {
    technology: "Java",
    experienceLevel: "Intermediate",
  },
  {
    technology: "UI / UX Design",
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
    <VStack spacing={10} p={6} align="center" justify="center">
      <AppText fontWeight="bold" fontSize="2xl" color={color.secondary}>
        My Experiences
      </AppText>
      <HStack justify={"center"} w={"100%"} spacing={3} wrap={"wrap"}>
        <ExperienceListBox title="Front-End Dev" experiences={frontEnd} />
        <ExperienceListBox title="Back-End Dev" experiences={backEnd} />
      </HStack>
    </VStack>
  );
}

export default Experience;
