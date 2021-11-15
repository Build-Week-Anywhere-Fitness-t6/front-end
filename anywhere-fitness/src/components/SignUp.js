import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";

// FormSchema for Validation
import formSchema from "../Validation/signup&login";

const initialFormErrors = {
    username: "",
    password: "",
  };

export default function SignUp() {
    const [form, setForm] = useState({
        credentials: {
          username: "",
          password: "",
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

        validate(name, value);

        setForm({
          credentials: { ...form.credentials, [name]: value },
        });
      };

    const userSignUp = (e) => {
        e.preventDefault();
        axios
          .post(
            "https://testurl.com",
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

       // Validation

    useEffect(() => {
        formSchema.isValid(form.credentials).then((valid) => setDisabled(!valid));
    }, [form.credentials]);

    const validate = (name, value) => {
        yup
        .reach(formSchema, name)
        .validate(value)
        .then(() => setFormErrors({ ...formErrors, [name]: "" }))
        .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
    }; 

    return (
       <div>
            <h2>Please Create An Account</h2>
            <form onSubmit={userSignUp}>
            <label>
                Username:
                <input
                    type="text"
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    invalid={!!formErrors.username}
                    valid={
                      formErrors.username !== ""
                        ? false
                        : form.credentials.username
                        ? true
                        : false
                    }
                />
            </label>
            <p>{formErrors.username}</p>
            <label>
                Password:
                <input
                    type="text"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    invalid={!!formErrors.password}
                    valid={
                    formErrors.password !== ""
                        ? false
                        : form.credentials.password
                        ? true
                        : false
                    }
                />
                <p>{formErrors.password}</p>
            </label>
                <button disabled={disabled}>Create</button>
            </form>
        </div>
    )
}
