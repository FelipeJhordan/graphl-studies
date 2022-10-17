import { Box, Typography } from "@mui/material";
import { MainColorsEnum } from "../../../shared/contants/colors";

function FooterHome() {
  return (
    <>
      <Box
        component="footer"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        width="100%"
      >
        <Typography
          variant="h5"
          fontSize={"1.2em"}
          color={MainColorsEnum.DARK_BLUE}
        >
          Criado com 100% por Felipe Jhordan
        </Typography>
      </Box>
    </>
  );
}

export default FooterHome;
