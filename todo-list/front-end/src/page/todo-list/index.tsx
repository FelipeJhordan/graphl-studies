import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import TodoTable from "./components/TodoTable";

function TodoListPage() {
  const navigate = useNavigate();
  return (
    <>
      <Box position={"relative"}>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => navigate("task/new", {replace: true})}
          style={{
            position: "absolute",
            top: "0",
            right: "0",
          }}
        >
          <Add />
        </Button>
      </Box>
      <TodoTable />
    </>
  );
}

export default TodoListPage;
