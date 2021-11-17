import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { TextField } from "@mui/material";

const initialFormErrors = {
    name: "",
    dateTime: "",
    location: "",
    intensity: "",
    duration: "",
};

export default function AddClass() {

    const [state,setState] = useState({
        classInfo: {
            name: "",
            dateTime: "",
            location: "",
            intensity: "",
            duration: "",
        }
    });

    const [value, setValue] = React.useState(new Date());

    const [disabled, setDisabled] = useState(true);

    const [formErrors, setFormErrors] = useState(initialFormErrors);

    const { push } = useHistory();

    const addClass = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
    }

    return(
        <div>
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
                <label>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                            renderInput={(props) => <TextField {...props} />}
                            label="Date & Time"
                            value={value}
                            onChange={(newValue) => {
                            setValue(newValue);
                            }}
                        />  
                    </LocalizationProvider>
                </label>
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
                    Intensity:
                    <button onclick="myFunction()" class="dropbtn">Dropdown</button>
                    <div id="myDropdown" class="dropdown-content">
                        <a href="#">Beginner</a>
                        <a href="#">Intermediate</a>
                        <a href="#">Advanced</a>
                    </div>
                    
                </label>
                <label>
                    Duration;
                    <input
                        type="text"
                        name="duration"
                        value={state.duration}
                        onChange={handleChange}
                    />
                    <p>{formErrors.duration}</p>
                </label>
            </form> 
        </div>
    )
}