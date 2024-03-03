import { HStack, Heading, Grid, GridItem, Box } from "@chakra-ui/react";
import color from "../config/color";
import { FaLinkedin, FaTelegram, FaGithub, FaTwitter } from "react-icons/fa";
import AppText from "../components/AppText";

function Footer() {
  return (
    <Grid
      as="footer"
      bgColor={color.secondary}
      // change some of its transparency of #4baef8
      bgGradient="linear(to-r, #4baef8, #2c2c6c)"
      color={color.primary}
      gap={4}
      h="400px"
      p={"2rem"}
      templateColumns={"repeat(1, 1fr)"}
      w="100%"
    >
      <GridItem
        alignItems={"flex-end"}
        display={"flex"}
        justifyContent={"center"}
        textAlign="center"
      >
        <Heading>Yeabsira Yonas</Heading>
      </GridItem>
      <GridItem
        alignItems={"flex-end"}
        display={"flex"}
        justifyContent={"center"}
      >
        <Box p={2} width={"50%"}>
          <AppText fontSize="1rem" fontStyle="cursive" color={"#FFF"}>
            Have something to say ? Feel free to reach out to me on any of the
            platforms below.
          </AppText>
        </Box>
      </GridItem>
      <GridItem>
        <HStack justify={"center"}>
          <FaLinkedin
            onClick={() =>
              window.open("https://www.linkedin.com/in/yeabsira-yonas/")
            }
            size={35}
            color={color.primary}
          />
          <FaTelegram
            onClick={() => window.open("https://t.me/fkureyohanns")}
            size={35}
            color={color.primary}
          />
          <FaGithub
            onClick={() => window.open("https://github.com/yabulala432")}
            size={35}
            color={color.primary}
          />
          <FaTwitter
            onClick={() => window.open("https://twitter.com/yeabsirayo77059")}
            size={35}
            color={color.primary}
          />
        </HStack>
      </GridItem>
    </Grid>
  );
}

export default Footer;
