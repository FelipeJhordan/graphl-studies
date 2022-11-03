import { useEffect } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { MainColorsEnum } from "../../shared/contants/colors";
import { api } from "../../services/api";
import { useMutation, useQuery } from "@apollo/client";

export function UpdateTaskPage() {


  const params = useParams();
  const navigate = useNavigate();

  const { loading, error, data } = useQuery(api.getTask(), {
    variables: {
      id: params.id,
    },
  });


  const [cb, {data: dataMutation, ...otherAtributes}] = useMutation(api.updateTask(), {
    awaitRefetchQueries: true
  })

  useEffect(() => {
    if (data) {
      const { description, title, date } = data.getTask;
      myForm.setValues({
        description,
        title,
        date,
      });
    }
  }, [data, loading]);

  const formValidation = Yup.object().shape({
    title: Yup.string().required("The title is required"),
    description: Yup.string(),
  });
  const myForm = useFormik({
    initialValues: {
      title: "",
      description: "",
      date: "",
    },
    validationSchema: formValidation,
    onSubmit: (values) => {
        try {
         cb({variables:{id: params.id ,title: myForm.values.title, description: myForm.values.description}})
         navigate("../../..", {relative: "path"})
        } catch(e) {
            console.log(e)
        }
    },
  });
  useEffect(() => {
    console.log(params);
  }, [params]);
  return (
    <Box
      width={"100%"}
      display="flex"
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Typography variant="h5" marginBottom={"2rem"} color={"whitesmoke"}>
        Atualizar
      </Typography>
      <form
        style={{
          backgroundColor: MainColorsEnum.WHITE,
          width: "50%",
          padding: "1rem 2rem",
        }}
      >
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
          Atualizar
        </Button>
      </form>
    </Box>
  );
}
