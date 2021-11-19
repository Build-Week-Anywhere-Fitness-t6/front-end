import React, { useState, useEffect } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import * as yup from "yup";
import axiosWithAuth from "../utilities/axiosWithAuth";

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { TextField, Typography } from "@mui/material";

// Material UI imports
import { Grid } from "@mui/material";
import { Button } from "@mui/material";

const initialFormErrors = {
    name: "",
    dateTime: "",
    location: "",
    intensity: "",
    duration: "",
};

export default function EditClass() {
    const { push } = useHistory();
    const { id } = useParams();

    const [formValues, setFormValues] = useState({
        name: "",
        start_time: "",
        location: "",
        intensity: "",
        duration: "",
        type: "",
        class_size: 30,
        instructor_username: "Jared"
    
    });

    useEffect(() => {
        axiosWithAuth()
      .get(`/classes/${id}`)
      .then((res) => {
        console.log(res.data)
        setFormValues(res.data);
      })
      .catch((err) => {
        console.log({ err });
      });
    }, [id]);

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
          });
    }

    const editClass = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .put(`/classes/${id}`, formValues)
            .then((res) => {
                push("/dashboard")
            })
            .catch((err) => console.log(err));
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
                    <Typography variant='h2'>Edit the selected class</Typography>
                </Grid>
                <Grid item xs={12}>
                    <label>
                     Name:
                        <input
                            type="text"
                            name="name"
                            value={formValues.name}
                            onChange={handleChange}
                        />
                    </label>
                </Grid>
                <Grid item xs={12}>
                    <label>
                        Location:
                        <input
                            type="text"
                            name="location"
                            value={formValues.location}
                            onChange={handleChange}
                        />
                    </label>
                </Grid>
                <Grid item xs={12}>
                    <label>
                        Time:
                        <input
                            type="text"
                            name="start_time"
                            value={formValues.start_time}
                            onChange={handleChange}
                        />
                    </label>
                </Grid>
                <Grid item xs={12}>
                    <label>
                        Class Type:
                        <input
                            type="text"
                            name="type"
                            value={formValues.type}
                            onChange={handleChange}
                        />
                    </label>
                </Grid>
                <Grid item xs={12}>
                    <label>
                        Maximum Class Size:
                        <input
                            type="number"
                            name="class_size"
                            value={formValues.class_size}
                            onChange={handleChange}
                        />
                    </label>
                </Grid>
                <Grid item xs={12}>
                    <label>
                        Intensity:

                        <select 
                            value={formValues.intensity}
                            onChange={handleChange}
                            name="intensity"
                        >
                        <option value=''>- Choose Intensity -</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                        </select>
                    </label>
                </Grid>
                <Grid item xs={12}>
                    <label>
                        Duration;
                        <input
                            type="text"
                            name="duration"
                            value={formValues.duration}
                            onChange={handleChange}
                        />
                    </label>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant='contained' color='primary' onClick={editClass}>Submit</Button>
                    </Grid>
                </Grid>
            </form>
    )
}