import { Box, HStack, Heading, Image, VStack } from "@chakra-ui/react";
import { BsBookmarkStarFill } from "react-icons/bs";
import { FaGraduationCap, FaGlobe } from "react-icons/fa";

import AppBoxIcon from "../components/AppBoxIcon";
import AppText from "../components/AppText";

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
    <VStack spacing={5} align="center" justify="center" gap={3} p={5}>
      <Heading
        textAlign={"center"}
        fontSize={"2rem"}
        fontWeight={"bold"}
        color={"#4db5ff"}
      >
        About Me
      </Heading>
      <Box
        mt={6}
        borderRadius={"30px"}
        backgroundColor={"#2c2c6c"}
        transition={"all 1s ease-in-out"}
        transform={"rotate(-30deg)"}
        _hover={{
          backgroundColor: "#4db5ff",
          transform: "rotate(0deg)",
          transition: "all 1s ease-in-out",
        }}
        width={"280px"}
        height={"280px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image
          borderRadius="30px"
          boxSize="250px"
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

      <HStack
        justifyContent={"center"}
        //   bgColor={"red"}
        wrap={"wrap"}
        width={"100vw"}
        p={5}
      >
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
      <Box textAlign={"center"} w={"60%"} p={"10px"}>
        <AppText
          color="#c4e1c5"
          fontSize="1.2rem"
          fontWeight="normal"
          fontStyle="italic"
          props={{
            spacing: 3,
            textAlign: "justify",
            p: 10,
          }}
        >
          I'm a Software Engineering Undergradute at Addis Ababa Science and
          Technology University. I'm an enthusiastic and driven Software
          Engineering student seeking a challenging internship opportunity to
          apply and expand my technical skills. With a strong academic
          foundation in software engineering and hands-on experience in various
          programming languages, I am eager to contribute to innovative projects
          and learn from experienced professionals in the industry. I am a quick
          learner who is always ready to face challenges.
        </AppText>
      </Box>
    </VStack>
  );
}

export default AboutMe;
