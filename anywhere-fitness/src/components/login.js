import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import axiosWithAuth from "../utilities/axiosWithAuth"
import axios from "axios";

// FormSchema for Validation
import formSchema from "../Validation/signup&login";

// Material UI imports
import { Button, ButtonGroup, Grid, Typography } from '@material-ui/core';

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
            <form>
              <Grid container xs={12} style={{
                                  height: '50vh',
                                  width: '37%',
                                  margin: '0 auto',
                                  marginTop: '5%',
                                  border: '3px solid black',
                                  borderRadius: '7px',
                                  backgroundColor: '#CDD3DF',
                                  display: 'flex',
                                  flexFlow: 'row wrap',
                                  alignItems: 'center',
                                  justifyContent: 'space-evenly',
                                  textAlign: 'center',
                                  }}>
              <Grid item xs={9}>
                <Typography variant='h2' style={{color: '#DC1849'}}>Enter Username/Password to Log in</Typography>
              </Grid>
              <Grid item xs={6}>
                <label>
                    <Typography variant='h4'>Username: </Typography>
                    <input
                        type="text"
                        name="username"
                        value={state.username}
                        onChange={handleChange}
                    />
                    <p>{formErrors.username}</p>
                </label>
              </Grid>
              <Grid item xs={6}>
                <label>
                <Typography variant='h4'>Password: </Typography>
                    <input
                        type="text"
                        name="password"
                        value={state.password}
                        onChange={handleChange}
                    />
                         <p>{formErrors.password}</p>
                  </label>
              </Grid>
              <Grid item xs={12}>  
                <ButtonGroup variant='contained'>
                  <Button 
                    onClick={login}
                    color='primary'
                    style={{padding: '10px 55px'}}
                    >
                    click to log in
                </Button>
                <Button href='/' style={{padding: '10px 55px'}}>Cancel</Button>
                </ButtonGroup>
              </Grid>
        </Grid>
      </form>
    );
}
