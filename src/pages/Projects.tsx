import { VStack, HStack } from "@chakra-ui/react";
import AppBoxImage from "../components/AppBoxImage";
import AppText from "../components/AppText";
import ExperienceListBox from "../components/ExperienceListBox";

const projects = [
  {
    images: [
      "https://github.com/yabulala432/PharmacyManagementSystemNewUI/raw/main/src/main/icons/screeShot.jpg",
      "https://github.com/yabulala432/PharmacyManagementSystemNewUI/raw/main/src/main/icons/screeShot2.jpg",
    ],
    type: "Desktop Application",
    usedTechnologies: "React, Chakra-UI, Framer-Motion",
    url: "https://github.com/yabulala432/PharmacyManagementSystemNewUI",
  },
  {
    images: [
      "https://github.com/yabulala432/FullStack-Employee-Management-System/raw/main/screeshots/screenShot2.png",
      "https://github.com/yabulala432/FullStack-Employee-Management-System/raw/main/screeshots/screenShot4.png",
      "https://github.com/yabulala432/FullStack-Employee-Management-System/raw/main/screeshots/screenShotFinal.png",
      "https://github.com/yabulala432/FullStack-Employee-Management-System/raw/main/screeshots/screenShot1.png",
    ],
    type: "Desktop Application",
    usedTechnologies: "Angular, Ng-Zorro, NestJS, MongoDB",
    url: "https://github.com/yabulala432/FullStack-Employee-Management-System",
  },
];

function Projects() {
  return (
    <VStack spacing={10} p={6} align="center" justify="center">
      <AppText fontWeight="bold" fontSize="2xl" color="#4db5ff">
        My Projects
      </AppText>
      <HStack justify={"center"} spacing={5} wrap={"wrap"}>
        {projects.map((project, index) => (
          <AppBoxImage
            key={index}
            images={project.images}
            usedTechnologies={project.usedTechnologies}
            url={project.url}
            type={project.type}
          />
        ))}
      </HStack>
    </VStack>
  );
}

export default Projects;
