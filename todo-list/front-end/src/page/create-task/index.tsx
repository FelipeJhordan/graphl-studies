import { useEffect } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MainColorsEnum } from "../../shared/contants/colors";
import { useMutation } from "@apollo/client";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function CreateTaskPage() {

  const [cb, {data, loading, error}] = useMutation(api.createTask(), {
    awaitRefetchQueries: true
  })
  const navigate = useNavigate();



  const createTask = () => {
    cb({variables:{ title: myForm.values.title, description: myForm.values.description}})
    navigate("../..", {relative: "path"})

  };

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
      createTask()
    },
  });
  useEffect(() => {}, []);
  return (
<Box width={"100%"} display="flex" flexDirection={"column"} alignItems={"center"}>
    <Typography variant="h5" marginBottom={'2rem'} color={"whitesmoke"}>Criar</Typography>
    <form style={{backgroundColor: MainColorsEnum.WHITE, width:"50%", padding: "1rem 2rem"}}>      
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
    </Box>
  );
}
