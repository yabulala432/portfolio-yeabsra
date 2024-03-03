import { Box, Grid, GridItem, HStack, Heading, Image } from "@chakra-ui/react";
import { BsBookmarkStarFill } from "react-icons/bs";
import { FaGraduationCap, FaGlobe } from "react-icons/fa";

import AppBoxIcon from "../components/AppBoxIcon";
import AppText from "../components/AppText";

import color from "../config/color";

import yeabsira from "../assets/yeabsira.jpg";

function AboutMe() {
  const aboutMeData = [
    {
      title: "Degree",
      icon: <FaGraduationCap size={30} />,
      subtitle: "Bsc. Software Engineering",
      footer: "Addis Ababa Science and Technology University",
    },
    {
      title: "Current GPA",
      icon: <BsBookmarkStarFill size={30} />,
      subtitle: "3.56",
      footer: "",
    },
    {
      title: "Domains",
      icon: <FaGlobe size={30} />,
      subtitle:
        "Web Development, Mobile Development, UI/UX Design, and more...",
      footer: "",
    },
  ];
  return (
    <Grid
      templateAreas={{
        xl: `
        "title title title title"
        "photo photo boxes boxes"
        "photo photo description description"
        `,
        lg: `
        "title title title title"
        "photo photo photo photo"
        "boxes boxes description description"
        `,

        md: `
        "title"
        "photo"
        "boxes"
        "description"
        `,
        sm: `
        "title"
        "photo"
        "boxes"
        "description"
        `,
      }}
      p={5}
    >
      <GridItem area="title">
        <Heading
          textAlign={"center"}
          fontSize={"2rem"}
          fontWeight={"bold"}
          color={color.secondary}
        >
          About Me
        </Heading>
      </GridItem>

      <GridItem
        area="photo"
        display={"flex"}
        justifyContent={"center"}
        overflow={"hidden"}
        p={5}
      >
        <Box
          borderRadius={"30px"}
          backgroundColor={color.primary}
          transition={"all 1s ease-in-out"}
          transform={"rotate(-30deg)"}
          _hover={{
            backgroundColor: color.secondary,
            transform: "rotate(0deg)",
            transition: "all 1s ease-in-out",
          }}
          width={"80%"}
          height={"100%px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image
            borderRadius="30px"
            height={"80%"}
            src={yeabsira}
            alt="Yeabsira Yonas"
            transform={"rotate(0deg)"}
            transition={"all 1s ease-in-out"}
            _hover={{
              transform: "scale(0.97) rotate(-30deg)",
              transition: "all 1.5s ease-in-out",
            }}
          />
        </Box>
      </GridItem>

      <GridItem
        area="boxes"
        display={"flex"}
        alignItems={"flex-end"}
        justifyContent={"center"}
      >
        <HStack justifyContent={"center"} wrap={"wrap"}>
          {aboutMeData.map(({ title, icon, subtitle, footer }, index) => (
            <Box key={index} p={1} w={240} h={190}>
              <AppBoxIcon
                title={title}
                icon={icon}
                subtitle={subtitle}
                footer={footer}
              />
            </Box>
          ))}
        </HStack>
      </GridItem>

      <GridItem display={"flex"} justifyContent={"center"} area="description">
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <AppText
            color={color.textColor}
            fontSize="1.2rem"
            fontWeight="normal"
            fontStyle="italic"
            props={{
              spacing: 3,
              textAlign: "justify",
              p: 4,
            }}
          >
            I'm a Software Engineering Undergradute at Addis Ababa Science and
            Technology University. I'm an enthusiastic and driven Software
            Engineering student seeking a challenging internship opportunity to
            apply and expand my technical skills. With a strong academic
            foundation in software engineering and hands-on experience in
            various programming languages, I am eager to contribute to
            innovative projects and learn from experienced professionals in the
            industry. I am a quick learner who is always ready to face
            challenges.
          </AppText>
        </Box>
      </GridItem>
    </Grid>
  );
}

export default AboutMe;
