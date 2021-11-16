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
        name: "",
        dateTime: "",
        location: "",
        intensity: "",
        duration: "",
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
                    <p>{formErrors.location}location</p>
                </label>
                <label>
                    Intensity:
                    <input
                    
                    />
                </label>
                <label>
                    Duration;
                    <input
                    
                    />
                </label>
            </form> 
        </div>
    )
}