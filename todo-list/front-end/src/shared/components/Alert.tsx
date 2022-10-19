import { Alert } from "@mui/material";
import { AlertType } from "../types/alert";
import { Props } from "../types/react/default-props";

export type AlertProp = Props & {
  data: AlertType;
};

export function CustomAlert({ data }: AlertProp) {
  if (data.type === "success") {
    return (
      <Alert variant="outlined" severity="success">
        {data.message}
      </Alert>
    );
  }

  return (
    <Alert variant="outlined" severity="error">
      {data.message}
    </Alert>
  );
}
