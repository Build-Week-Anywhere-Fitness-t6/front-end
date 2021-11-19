import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";

// FormSchema for Validation
import formSchema from "../Validation/signup&login";

// Material UI imports
import { Button, ButtonGroup, Grid, Typography } from "@material-ui/core"; 


const initialFormErrors = {
    username: "",
    password: "",
  };

export default function SignUp() {
    const [form, setForm] = useState({
        credentials: {
          username: "",
          password: "",
          role: ""
        },
      });
    
      //Disabled
      const [disabled, setDisabled] = useState(true);
      //Errors
      const [formErrors, setFormErrors] = useState(initialFormErrors);
    
      const { push } = useHistory();
    
      const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setForm({
          credentials: { ...form.credentials, [name]: value },
        });
      };

    const userSignUp = (e) => {
        e.preventDefault();
        axios
          .post(
            "https://ft-anywhere-fitness-6.herokuapp.com/api/auth/register",
            form.credentials
          )
          .then((res) => {
            console.log(res.data);
            localStorage.setItem("token", res.data.token);
            push("/login");
          })
          .catch((err) => {
            console.log(err.response);
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
              <Typography variant='h2' style={{color: '#DC1849'}}>Choose a Username/Password to create an account</Typography>
              </Grid>
              <Grid item xs={6}>
                <label>
                    <Typography variant='h4'>Username: </Typography>
                    <input
                        type="text"
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                    />
                  </label>
              </Grid>
                  <p>{formErrors.username}</p>
              <Grid item xs={6}>
                  <label>
                      <Typography variant='h4'>Password: </Typography>
                      <input
                          type="text"
                          name="password"
                          value={form.password}
                          onChange={handleChange}
                      />
                  </label>
              </Grid>
              <Grid item>
                  <select 
                    value={form.role}
                    onChange={handleChange}
                    name="role"
                  >
                    <option value=''>- Choose Account -</option>
                    <option value="client">Client</option>
                    <option value="instructor">Instructor</option>
                  </select>
                </Grid>
                <Grid item xs={12}>  
                <ButtonGroup variant='contained'>
                  <Button 
                    onClick={userSignUp}
                    color='primary'
                    variant='contained'
                    style={{padding: '10px 55px'}}
                    >
                    click to Sign up
                </Button>
                <Button href='/' style={{padding: '10px 55px'}}>Cancel</Button>
                </ButtonGroup>
              </Grid>
          </Grid>
        </form>
    )
}
