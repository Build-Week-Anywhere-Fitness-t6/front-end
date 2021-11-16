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
                />
            </label>
            <select 
              value={form.role}
              onChange={handleChange}
              name="role"
            >
              <option value=''>- Choose Account -</option>
              <option value="client">Client</option>
              <option value="instructor">Instructor</option>
            </select>
                <button >Create</button>
            </form>
        </div>
    )
}
