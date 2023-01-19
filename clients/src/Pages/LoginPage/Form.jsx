import React from 'react';
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
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    password: yup.string().email("invalid email").required("required"),
    email:yup.string().required("required"),
    location: yup.string().required("required"),
    occupation: yup.string().required("required"),
});

const loginSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
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
  return (
    <div>Form</div>
  )
}

export default Form