import { VStack, HStack } from "@chakra-ui/react";
import AppBoxImage from "../components/AppBoxImage";
import AppText from "../components/AppText";
import color from "../config/color";

const projects = [
  {
    title: "Pharmacy Management System",
    images: [
      "https://github.com/yabulala432/PharmacyManagementSystemNewUI/raw/main/src/main/icons/screeShot.jpg",
      "https://github.com/yabulala432/PharmacyManagementSystemNewUI/raw/main/src/main/icons/screeShot2.jpg",
    ],
    type: "Desktop Application",
    usedTechnologies: "Java | Swing | MySQL ",
    url: "https://github.com/yabulala432/PharmacyManagementSystemNewUI",
  },
  {
    title: "Employee Management System",
    images: [
      "https://github.com/yabulala432/FullStack-Employee-Management-System/raw/main/screeshots/screenShot2.png",
      "https://github.com/yabulala432/FullStack-Employee-Management-System/raw/main/screeshots/screenShot4.png",
      "https://github.com/yabulala432/FullStack-Employee-Management-System/raw/main/screeshots/screenShotFinal.png",
      "https://github.com/yabulala432/FullStack-Employee-Management-System/raw/main/screeshots/screenShot1.png",
    ],

    type: "Desktop Application",
    usedTechnologies: "Angular | Ng-Zorro | NestJS | MongoDB",
    url: "https://github.com/yabulala432/FullStack-Employee-Management-System",
  },
  {
    title: "E-Commerce Application",
    images: [
      "https://raw.githubusercontent.com/yabulala432/react-native-e-commerce-app/master/app/photos/photo_1.png?token=GHSAT0AAAAAACOLXL5LJ7YZUZSRHWX4ASZEZPD7J4A",
      "https://raw.githubusercontent.com/yabulala432/react-native-e-commerce-app/master/app/photos/photo_2.png?token=GHSAT0AAAAAACOLXL5L7Q334OPBR4FWH72UZPD7M6Q",
      "https://raw.githubusercontent.com/yabulala432/react-native-e-commerce-app/master/app/photos/photo_3.png?token=GHSAT0AAAAAACOLXL5LPSNRXU5FPQ7ZEPCCZPD7N3Q",
      // "https://raw.githubusercontent.com/yabulala432/react-native-e-commerce-app/master/app/photos/photo_4.png?token=GHSAT0AAAAAACOLXL5LIOHSUWGMPL33OH5WZPD2CMA",
      // "https://raw.githubusercontent.com/yabulala432/react-native-e-commerce-app/master/app/photos/photo_5.png?token=GHSAT0AAAAAACOLXL5LHCWCESHAZGKAXVH2ZPD2CQQ",
      // "https://raw.githubusercontent.com/yabulala432/react-native-e-commerce-app/master/app/photos/photo_6.png?token=GHSAT0AAAAAACOLXL5L2557YAVPUBGAQO4CZPD2DDA",
      // "https://raw.githubusercontent.com/yabulala432/react-native-e-commerce-app/master/app/photos/photo_7.png?token=GHSAT0AAAAAACOLXL5KCMVTCHPNKZ6HXPEWZPD2DMQ",
      // "https://raw.githubusercontent.com/yabulala432/react-native-e-commerce-app/master/app/photos/photo_8.png?token=GHSAT0AAAAAACOLXL5LU66EUWZ7P6QKWIQSZPD2DXQ",
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
