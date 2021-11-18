import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import axiosWithAuth from "../utilities/axiosWithAuth"
import axios from "axios";

// FormSchema for Validation
import formSchema from "../Validation/signup&login";

// Material UI imports
import  {Button}  from '@material-ui/core';

const initialFormErrors = {
    username: "",
    password: "",
  };

export default function Login() {
    const [state, setState] = useState({
        credentials: {
          username: "",
          password: "",
        },
      });

    // Disabled Button
    const [disabled, setDisabled] = useState(true);
    // Form Errors
     const [formErrors, setFormErrors] = useState(initialFormErrors);

    const { push } = useHistory();
      
    const login = (e) => {
        e.preventDefault();
        axios
          .post("https://ft-anywhere-fitness-6.herokuapp.com/api/auth/login", state.credentials)
          .then((res) => {
            setFormErrors(initialFormErrors);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("role", res.data.role);
            push("/dashboard");
            // props.setLoggedIn(true);
          })
          .catch((err) => {
              console.log(err.response)
            setFormErrors({
              ...formErrors,
              navValid: "this account does not exist",
            });
          });
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
       
        setState({
          credentials: { ...state.credentials, [name]: value },
        });
    };

   

    return (
        <div className='login-page'>
          <h2>Enter Username/Password to log in.</h2>
            <form>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={state.username}
                        onChange={handleChange}
                    />
                    <p>{formErrors.username}</p>
                </label>
                <label>
                    Password:
                    <input
                        type="text"
                        name="password"
                        value={state.password}
                        onChange={handleChange}
                    />
                         <p>{formErrors.password}</p>
                </label>
                <br />
                <br />
                <Button 
                    onClick={login}
                    color='primary'
                    variant='contained'
                    >
                    click to log in
                </Button>
            </form>
        </div>
    );
}
