import { Grid } from "@chakra-ui/react";

import AppText from "./AppText";
import AppBox from "./AppBox";

interface props {
  icon: React.ReactNode;
  title: string;

  subtitle: string;
  footer: string;
}

function AppBoxIcon({ title, icon, subtitle, footer }: props) {
  return (
    <AppBox>
      <Grid
        templateColumns={"repeat(1, 1fr)"}
        templateRows={"repeat(1, 1fr)"}
        gap={5}
      >
        <Grid
          row={0.5}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {icon}
        </Grid>
        <Grid
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          overflow={"clip"}
          w={"100%"}
        >
          <AppText fontSize={"xl"} fontWeight={"bold"}>
            {title}
          </AppText>
          <AppText fontSize="sm" fontWeight="normal" color="#94c7fc">
            {subtitle}
          </AppText>
          <AppText
            fontSize="11px"
            fontStyle="italic"
            fontWeight="normal"
            color="#94c7fc"
          >
            {footer}
          </AppText>
        </Grid>
      </Grid>
    </AppBox>
  );
}

export default AppBoxIcon;
