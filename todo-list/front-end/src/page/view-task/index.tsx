import { useEffect } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useParams } from "react-router-dom";
import { MainColorsEnum } from "../../shared/contants/colors";
import { api } from "../../services/api";
import { useQuery } from "@apollo/client";

export function ViewTaskPage() {
  const params = useParams()
  console.log(params.id)
  const { loading, error, data } = useQuery( api.getTask(), {
    variables: {
      id: params.id
    }
  })  

  useEffect(() => {
   if(data) {
    const {description, title,date } = data.getTask
    myForm.setValues({
      description,
      title,
      date
    })
   }
  }, [data, loading])


  const formValidation = Yup.object().shape({
    title: Yup.string().required("The title is required"),
    description: Yup.string(),
  });
  const myForm = useFormik({
    initialValues: {
      title: "",
      description: "",
      date: ""
    },
    validationSchema: formValidation,
    onSubmit: (values) => {
      alert({ ...values });
    },
  });
  useEffect(() => {
    console.log(params)
  }, [params]);
  return (
    <Box width={"100%"} display="flex" flexDirection={"column"} alignItems={"center"}>
    <Typography variant="h5" marginBottom={'2rem'} color={"whitesmoke"}>Visualizar</Typography>
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
        disabled
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
        disabled
      />
      <TextField
        required
        fullWidth
        label="Date"
        margin="dense"
        name="date"
        value={myForm.values.date}
        onChange={myForm.handleChange}
        error={!!myForm.errors.date}
        disabled
      />

    </form>
</Box>
  );
}
