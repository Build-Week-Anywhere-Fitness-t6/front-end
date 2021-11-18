import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import axiosWithAuth from "../utilities/axiosWithAuth";

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { TextField } from "@mui/material";

// Material UI imports 
import { Button } from "@material-ui/core";




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
            class_size: "",
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
        <div className='createClass-form login-page'>
            <h2>Enter required infomation to create a new class</h2>
            <div className='addClass-wrap'>
            <form onSubmit={addClass}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={state.name}
                        onChange={handleChange}
                    />
                    <p>{formErrors.name}</p>
                </label>
                {/* <label>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                            renderInput={(props) => <TextField {...props} />}
                            label="Date & Time"
                            name="start_time"
                            value={state.start_time}
                            onChange={handleChange}
                            // onChange={(newValue) => {
                            // setValue(newValue);
                            // }}
                        />  
                    </LocalizationProvider>
                </label> */}
                <label>
                    Location:
                    <input
                        type="text"
                        name="location"
                        value={state.location}
                        onChange={handleChange}
                    />
                    <p>{formErrors.location}</p>
                </label>
                <label>
                    Time:
                    <input
                        type="text"
                        name="start_time"
                        value={state.start_time}
                        onChange={handleChange}
                    />
                    <p>{formErrors.location}</p>
                </label>
                <label>
                    Class Type:
                    <input
                        type="text"
                        name="type"
                        value={state.type}
                        onChange={handleChange}
                    />
                    <p>{formErrors.type}</p>
                </label>
                <label>
                    Maximum Class Size:
                    <input
                        type="text"
                        name="class_size"
                        value={state.class_size}
                        onChange={handleChange}
                    />
                    <p>{formErrors.class_size}</p>
                </label>
                <label>
                <div className='dropdown'>
                    Intensity:
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
                <label>
                    Duration:
                    <input
                        type="text"
                        name="duration"
                        value={state.duration}
                        onChange={handleChange}
                    />
                    <p>{formErrors.duration}</p>
                </label>
                <button>Create a Workout</button>
            </form>
          </div> 
        </div>
    )
}