import { Delete, Edit, SmartDisplay } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { Props } from "../../../shared/types/react/default-props";

type FormType = "edit" | "view";

export type ActionListProps = Props & {
  id: string;
};

export function ActionList({ id }: ActionListProps) {
  const navigate = useNavigate();

  const navigateToForm = (formType: FormType) => {
    if (formType === "edit") {
      navigate(`task/${id}/edit`);
      return;
    }
    navigate(`task/${id}`);
  };

  const deleteTask = () => {};

  return (
    <>
      <Box display={"flex"}>
        <Button onClick={() => navigateToForm("edit")}>
          <Edit />
        </Button>
        <Button onClick={() => navigateToForm("view")}>
          <SmartDisplay />
        </Button>
        <Button>
          <Delete />
        </Button>
      </Box>
    </>
  );
}
