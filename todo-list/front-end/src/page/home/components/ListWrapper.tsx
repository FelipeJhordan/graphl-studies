import { ListAltSharp } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MainColorsEnum } from "../../../shared/contants/colors";

function ListWrapper() {
  const navigate = useNavigate();
  return (
    <>
      <Box paddingTop={"45%"} position={"relative"}>
      <Box>
        <Typography variant="h6" color={"cornflowerblue"}>
          Todo list to management you tasks and daily chores, the efficient way to improve you life.
        </Typography>
      </Box>
      <Box  position={"absolute"} bottom={"-3rem"} right={"-2rem"}>
        <Button
          variant="contained"
          sx={{background: MainColorsEnum.RED}}
          size="large"
          
          onClick={() => navigate("/todo")}
        >
          Lista 
        </Button>
      </Box>
      </Box>
    </>
  );
}

export default ListWrapper;
