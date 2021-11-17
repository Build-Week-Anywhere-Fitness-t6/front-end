import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Class from "./Class";
import axios from "axios";
import axiosWithAuth from "../utilities/axiosWithAuth";

export default function Dashboard() {
    const { push } = useHistory();
  const [classes, setClasses] = useState([]);


      const getClasses = () => {
        axiosWithAuth()
          .get("/classes")
          .then((res) => {
            setClasses(res.data);
            console.log(res.data)
          })
          .catch((err) => {
            console.log(err.response);
          });
      };

    useEffect(() => {
        getClasses();
    }, []);

    const deleteClass = (id) => {
        setClasses(classes.filter((workout) => workout.class_id !== +id));
    };
    
      const handleDelete = (id) => {
        axiosWithAuth()
          .delete(`/classes/${id}`)
          .then((resp) => {
            deleteClass(id);
            push("/dashboard")
          })
          .catch((err) => {
            console.log(err.response);
          });
      };

    const handleAdd = () => {
        push("/add");
      };

    return (
        <div>
            <h1>Welcome to Anywhere Fitness!</h1>
            <div>
                {classes.map((workout) => {
                    return (
                        <Class
                        key={workout.class_id}
                        workout={workout}
                        handleDelete={() => {
                            handleDelete(workout.class_id);
                        }}
                        />
                    );
                })}
            </div>
            <button onClick={handleAdd}>Create a Workout</button>
        </div>
        
    )
}
