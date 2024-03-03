import { Grid, GridItem } from "@chakra-ui/react";

import AppText from "../components/AppText";
import color from "../config/color";

function Me() {
  return (
    <Grid
      templateAreas={"repeat(1, 1fr)"}
      alignItems={"center"}
      //   bg={"tomato"}
      justifyContent={"center"}
      h={"200px"}
    >
      <GridItem>
        <AppText fontStyle="italic" fontSize={"sm"} fontWeight={"bold"}>
          Hello I'm
        </AppText>
        <AppText
          fontSize={"5xl"}
          props={{
            padding: "0",
            margin: "0",
          }}
        >
          <span style={{ color: color.textColor }}>Y</span>eabsira{" "}
          <span style={{ color: color.textColor }}>Y</span>onas
        </AppText>
        <AppText
          fontSize={"sm"}
          color={"gray"}
          fontStyle="italic"
          fontWeight={"normal"}
        >
          Software Engineering UnderGraduate
        </AppText>
      </GridItem>
    </Grid>
  );
}

export default Me;
