import { useMutation } from "@apollo/client";
import { Delete, Edit, SmartDisplay } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api";
import { Props } from "../../../shared/types/react/default-props";

type FormType = "edit" | "view";

export type ActionListProps = Props & {
  id: string;

  handleParentState: Function
};

export function ActionList({ id, handleParentState }: ActionListProps) {
  const navigate = useNavigate();
  const [cb, {data, loading, error}] = useMutation(api.removeTask())

  const navigateToForm = (formType: FormType) => {
    if (formType === "edit") {
      navigate(`task/${id}/edit`);
      return;
    }
    navigate(`task/${id}`);
  };

  const deleteTask = () => {
    cb({variables:{ id}})
    handleParentState(false)
  };

  return (
    <>
      <Box display={"flex"}>
        <Button disabled onClick={() => navigateToForm("edit")}>
          <Edit />
        </Button>
        <Button onClick={() => navigateToForm("view")}>
          <SmartDisplay />
        </Button>
        <Button>
          <Delete onClick={() => deleteTask()} />
        </Button>
      </Box>
    </>
  );
}
