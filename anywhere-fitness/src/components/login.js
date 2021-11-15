import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

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

    // const { push } = useHistory();
      
    const login = (e) => {
        e.preventDefault();
    //     axiosWithAuth()
    //       .post("auth/login", state.credentials)
    //       .then((res) => {
    //         setFormErrors(initialFormErrors);
    //         localStorage.setItem("token", res.data.token);
    //         push("/upcomingevents");
    //         props.setLoggedIn(true);
    //       })
    //       .catch((err) => {
    //         setFormErrors({
    //           ...formErrors,
    //           navValid: "this account does not exist",
    //         });
    //       });
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
    
        setState({
          credentials: { ...state.credentials, [name]: value },
        });
    };

    return (
        <div>
            <form onSubmit={login}>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={state.username}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="text"
                        name="password"
                        value={state.password}
                        onChange={handleChange}
                    />
                </label>
                <button>Login</button>
            </form>
        </div>
    );
}
