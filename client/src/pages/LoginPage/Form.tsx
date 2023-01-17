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
import StringSchema from "yup/lib/string";

const registerSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    password: yup.string().email("invalid email").required("required"),
    email:yup.string().required("required"),
    location: yup.string().required("required"),
    occupation: yup.string().required("required"),
})

interface initialValues {
    firstName : string;
    lastName: string;
    password: string;
    email: string;
    location: string;
    occupation: string;
    picture: string
}

const initialRegisterValues: initialValues = {
        firstName: "",
        lastName: "",
        password: "",
        email: "",
        location: "",
        occupation: "",
        picture:""
}
interface LoginValues {
    email: string,
    password: string
}

const loginValues: LoginValues = {
    email: "",
    password: ""
}

const Form = () => {
    const [pageType, setPageType] = useState("login");
}