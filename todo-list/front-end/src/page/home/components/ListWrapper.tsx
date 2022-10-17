import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ListWrapper() {
  const navigate = useNavigate();
  return (
    <>
      <Box alignSelf={"end"} marginRight={"25%"}>
        <Button
          variant="outlined"
          color="secondary"
          size="large"
          onClick={() => navigate("/todo")}
        >
          Lista
        </Button>
      </Box>
    </>
  );
}

export default ListWrapper;
