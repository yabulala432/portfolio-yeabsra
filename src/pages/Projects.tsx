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
import screeShot3 from "../assets/pharmacyProject/screeShot3.png";

// game-hub project
import gameHub_1 from "../assets/game-hubProject/game_hub1.jpg";

// snake game and capital cities game
import snake1 from "../assets/snake-gameProject/snake1.png";
import snake2 from "../assets/snake-gameProject/snake2.png";
import snake3 from "../assets/snake-gameProject/snake3.png";
import snake4 from "../assets/snake-gameProject/snake4.png";
import snake5 from "../assets/snake-gameProject/snake5.png";
import snake6 from "../assets/snake-gameProject/snake6.png";

const projects = [
  {
    title: "Pharmacy Management System",
    images: [screeShot, screeShot2, screeShot3],
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

    type: "Web Application",
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
    usedTechnologies: "React Native | Expo | NestJS | MongoDB Atlas | TS",
    url: "https://github.com/yabulala432/react-native-e-commerce-app",
  },
  {
    title: "Game-Hub",
    images: [gameHub_1],
    type: "Web Application",
    usedTechnologies: "React | Vite | Chackra-UI | TS",
    url: "https://github.com/yabulala432/game-hub",
  },
  {
    title: "Snake Game and Capital-Cities Quiz",
    images: [snake1, snake2, snake3, snake4, snake5, snake6],
    type: "Desktop Application",
    usedTechnologies: "Java | JavaFX",
    url: "https://github.com/yabulala432/Snake-Game-And-Capital-City-Quiz",
  },
];

function Projects() {
  return (
    <VStack spacing={10} p={6} align="center" justify="center">
      <VStack>
        <AppText fontWeight="normal" fontSize="sm" color={"gray"}>
          Some of
        </AppText>
        <AppText fontWeight="bold" fontSize="2xl" color={color.secondary}>
          My Projects ...
        </AppText>
      </VStack>
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
