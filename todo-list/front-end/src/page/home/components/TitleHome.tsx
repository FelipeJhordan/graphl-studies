import styled from "@emotion/styled";
import PanToolIcon from "@mui/icons-material/PanTool";
import { Box, Typography } from "@mui/material";
import { MainColorsEnum } from "../../../shared/contants/colors";

const PanToolIconWrapper = styled.span`
  padding: 1rem 0.5rem 1rem 0.25rem;
  display: inline-block;
  margin-left: 2.4rem;
`;

const RedTextMark = styled.span`
  color: ${MainColorsEnum.RED};
  weight: bold;
`;

function TitleHome() {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        paddingRight={"4rem"}
      >
        <Typography variant="h1" color={"#F1FAEE"} fontWeight={"300"}>
          HandTasks
        </Typography>
        <Box display={"flex"} flexDirection="row" alignItems={"center"}>
          <Typography variant="h5" color={"#F1FAEE"}>
            In the palm of{" "}
            <RedTextMark>
              <b>the hand</b>
            </RedTextMark>
          </Typography>
          <PanToolIconWrapper>
            <PanToolIcon
              htmlColor={MainColorsEnum.LIGHT_BLUE}
              sx={{
                fontSize: "3rem",
              }}
            ></PanToolIcon>
          </PanToolIconWrapper>
        </Box>
      </Box>
    </>
  );
}

export default TitleHome;
