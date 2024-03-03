import { VStack, HStack } from "@chakra-ui/react";
import AppBoxImage from "../components/AppBoxImage";
import AppText from "../components/AppText";
import color from "../config/color";

// import some project images
// e-commerce project
import photo_1 from "../assets/e-commerceProject/photo_1.png";
import photo_2 from "../assets/e-commerceProject/photo_2.png";
import photo_3 from "../assets/e-commerceProject/photo_3.png";
import photo_4 from "../assets/e-commerceProject/photo_4.png";
import photo_5 from "../assets/e-commerceProject/photo_5.png";
import photo_6 from "../assets/e-commerceProject/photo_6.png";
import photo_7 from "../assets/e-commerceProject/photo_7.png";
import photo_8 from "../assets/e-commerceProject/photo_8.png";

// employee project
import screenShot_1 from "../assets/employeeProject/screenShot1.png";
import screenShot_2 from "../assets/employeeProject/screenShot2.png";
import screenShot_3 from "../assets/employeeProject/screenShot3.png";
import screenShot_4 from "../assets/employeeProject/screenShot4.png";
import screenShot_5 from "../assets/employeeProject/screenShotFinal.png";

// pharmacy project
import screeShot from "../assets/pharmacyProject/screeShot.jpg";
import screeShot2 from "../assets/pharmacyProject/screeShot2.jpg";

const projects = [
  {
    title: "Pharmacy Management System",
    images: [screeShot, screeShot2],
    type: "Desktop Application",
    usedTechnologies: "Java | Swing | MySQL ",
    url: "https://github.com/yabulala432/PharmacyManagementSystemNewUI",
  },
  {
    title: "Employee Management System",
    images: [
      screenShot_1,
      screenShot_2,
      screenShot_3,
      screenShot_4,
      screenShot_5,
    ],

    type: "Desktop Application",
    usedTechnologies: "Angular | Ng-Zorro | NestJS | MongoDB",
    url: "https://github.com/yabulala432/FullStack-Employee-Management-System",
  },
  {
    title: "E-Commerce Application",
    images: [
      photo_1,
      photo_5,
      photo_2,
      photo_6,
      photo_3,
      photo_8,
      photo_7,
      photo_4,
    ],
    type: "Mobile Application (In Progress)",
    usedTechnologies: "React Native | Expo | NestJS | MongoDB Atlas",
    url: "https://github.com/yabulala432/react-native-e-commerce-app",
  },
];

function Projects() {
  return (
    <VStack spacing={10} p={6} align="center" justify="center">
      <AppText fontWeight="bold" fontSize="2xl" color={color.secondary}>
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
            title={project.title}
          />
        ))}
      </HStack>
    </VStack>
  );
}

export default Projects;
