import { 
    Box,
     Button, 
     TextField, 
     Typography, 
     useMediaQuery, 
     useTheme 
} from "@mui/material";
import { useState } from "react";
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { setLogin } from "state/authSlice";
import Dropzone from "react-dropzone";
import FlexBetween from "components/FlexBetween";

const registerSchema = yup.object().shape({
    firstName: yup.string().required("Firstname is required").min(2, "Too Short!").max(50, "Too Long!"),
    lastName: yup.string().required("Lastname is required").min(2, "Too Short!").max(50, "Too Long!"),
    password: yup.string().required("Invalid password").required("Password is required"),
    email:yup.string().required("Email is required").min(2, "Too Short!").max(50, "Too Long!"),
    location: yup.string().required("Location is required").min(2, "Too Short!").max(50, "Too Long!"),
    occupation: yup.string().required("Occupation is required").min(2, "Too Short!").max(50, "Too Long!"),
});

const loginSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("Email is required").min(2, "Too Short!").max(50, "Too Long!"),
    password: yup.string().required("Password is required").min(2, "Too Short!").max(50, "Too Long!"),
  });
  
  const initialValuesRegister = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    location: "",
    occupation: "",
    picture: "",
  };
  
  const initialValuesLogin = {
    email: "",
    password: "",
  };

const Form = () => {
  const { palette } = useTheme()
  console.log(palette);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isMobileQuery = useMediaQuery("(min-width: 600px)");
  const isLogin = pageType === "login";
  const isRegister = pageType === "register"

  const handleSubmit=(e, values, onSubmitProps)=> {
    e.preventDefault()
  }
  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
      validationSchema={isLogin ? loginSchema : registerSchema }
    >
      {/* (({values, 
         errors, 
         touched, 
         handleBlur, 
         handleChange, 
         handleSubmit, 
         setFieldValue, 
         resetForm})
         => ( */}
        {(formik) => {
        const {
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
          isValid,
          dirty
        } = formik;
        <Form onSubmit={handleSubmit}>
          <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": {gridColumn: isNonMobile ? undefined : "span 4"}
              }}
          >
            {isRegister && (
              <>
              <TextField
                  label="First Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  values={values.firstName}
                  name="firstName"
                  errors={Boolean(touched.firstName) && Boolean(errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                  sx={{ gridColumn: "span 2"}}
              />
              <TextField
                  label="Last Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  values={values.lastName}
                  name="lastName"
                  errors={Boolean(touched.lastName) && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                  sx={{ gridColumn: "span 2"}}
              />
              <TextField
                  label="Location"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  values={values.location}
                  name="location"
                  errors={Boolean(touched.location) && Boolean(errors.location)}
                  helperText={touched.location && errors.location}
                  sx={{ gridColumn: "span 2"}}
              />
               <TextField
                  label="Occupation"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  values={values.occupation}
                  name="occupation"
                  errors={Boolean(touched.occupation) && Boolean(errors.occupation)}
                  helperText={touched.occupation && errors.occupation}
                  sx={{ gridColumn: "span 2"}}
              />
                <Box
                  gridColumn="span 4"
                  border={`1px solid ${palette.neutral.medium}`}
                  borderRadius="5px"
                  p="1rem"
                >
                  <Dropzone
                      acceptedFiles=".jpg, .jpeg, .png"
                  >

                  </Dropzone>
                </Box>
              </>
            )}
          </Box>
        </Form>
        }}
    </Formik>
  )
}

export default Form;