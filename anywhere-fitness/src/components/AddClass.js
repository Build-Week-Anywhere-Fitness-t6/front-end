import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import axiosWithAuth from "../utilities/axiosWithAuth";

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { TextField } from "@mui/material";

// Material UI imports 
import { Button, Grid, ButtonGroup, Typography } from "@material-ui/core";
import { textAlign } from "@mui/lab/node_modules/@mui/system";




const initialFormErrors = {
    name: "",
    dateTime: "",
    location: "",
    intensity: "",
    duration: "",
    type: "",
    class_size: "",
};

export default function AddClass() {

    const [state,setState] = useState({
        classInfo: {
            name: "",
            start_time: "",
            location: "",
            intensity: "",
            duration: "",
            type: "",
            class_size: 30,
            instructor_username: "Jared"
        }
        
    });

    const [value, setValue] = React.useState(new Date());

    const [disabled, setDisabled] = useState(true);

    const [formErrors, setFormErrors] = useState(initialFormErrors);

    const { push } = useHistory();

    const addClass = (e) => {
        e.preventDefault();
        console.log(state)
        axiosWithAuth()
            .post("/classes", state.classInfo)
            .then((res) => {
                push("/dashboard")
            })
            .catch((err) => console.log(err));
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setState({
            classInfo: { ...state.classInfo, [name]: value },
          });
    }

    return(
        <form>
            <Grid container xs={12} style={{
                                  height: '50vh',
                                  width: '37%',
                                  margin: '0 auto',
                                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                                  borderRadius: '7px',
                                  display: 'flex',
                                  flexFlow: 'row wrap',
                                  alignItems: 'center',
                                  justifyContent: 'space-evenly',
                                  textAlign: 'center',
                                  }}>
                <Grid item xs={12}>
                    <Typography variant='h2'>Enter the required information to create a new class</Typography>
                </Grid>
                <Grid item xs={6}>
                    <label>
                        <Typography variant='h4'>Name: </Typography>
                        <input
                            type="text"
                            name="name"
                            value={state.name}
                            onChange={handleChange}
                        />
                        <p>{formErrors.name}</p>
                    </label>
                </Grid>
                <Grid item xs={6}>
                    <label>
                    <Typography variant='h4'>Location: </Typography>
                        <input
                            type="text"
                            name="location"
                            value={state.location}
                            onChange={handleChange}
                        />
                        <p>{formErrors.location}</p>
                    </label>
                </Grid>
                <Grid item xs={6}>
                    <label> 
                    <Typography variant='h4'>Time: </Typography>
                        <input
                            type="text"
                            name="start_time"
                            value={state.start_time}
                            onChange={handleChange}
                        />
                        <p>{formErrors.location}</p>
                    </label>
                </Grid>
                <Grid item xs={6}>
                    <label>
                    <Typography variant='h4'>Class Type: </Typography>
                        <input
                            type="text"
                            name="type"
                            value={state.type}
                            onChange={handleChange}
                        />
                        <p>{formErrors.type}</p>
                    </label>
                </Grid>
                <Grid item xs={6}>
                    <label>
                    <Typography variant='h4'>Maximum Class Size: </Typography>
                        <input
                            type="number"
                            name="class_size"
                            value={state.class_size}
                            onChange={handleChange}
                        />
                        <p>{formErrors.class_size}</p>
                    </label>
                </Grid>
                <Grid item xs={6}>
                    <label>
                    <div className='dropdown'>
                    <Typography variant='h4'>Intensity: </Typography>
                        <select 
                            value={state.intensity}
                            onChange={handleChange}
                            name="intensity"
                        >
                        <option value=''>- Choose Intensity -</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                        </select>
                        </div>
                    </label>
                </Grid>
                <Grid item xs={6}>
                    <label>
                    <Typography variant='h4'>Duration: </Typography>:
                        <input
                            type="text"
                            name="duration"
                            value={state.duration}
                            onChange={handleChange}
                        />
                        <p>{formErrors.duration}</p>
                    </label>
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={addClass}>Create a Workout</Button>
                </Grid>

            </Grid>
        </form>
    )
}