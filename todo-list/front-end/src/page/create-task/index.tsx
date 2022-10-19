import { useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

export function CreateTaskPage() {
  const formValidation = Yup.object().shape({
    title: Yup.string().required("The title is required"),
    description: Yup.string(),
  });
  const myForm = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: formValidation,
    onSubmit: (values) => {
      alert({ ...values });
    },
  });
  useEffect(() => {}, []);
  return (
    <form>
      <TextField
        required
        fullWidth
        label="Title"
        margin="dense"
        name="title"
        value={myForm.values.title}
        onChange={myForm.handleChange}
        error={!!myForm.errors.title}
        helperText={myForm.errors.title}
      />
      <TextField
        required
        fullWidth
        label="Description"
        margin="dense"
        name="description"
        value={myForm.values.description}
        onChange={myForm.handleChange}
        error={!!myForm.errors.description}
        helperText={myForm.errors.description}
      />

      <Button
        disabled={!myForm.isValid}
        onClick={myForm.submitForm}
        variant="contained"
      >
        Submit
      </Button>
    </form>
  );
}
