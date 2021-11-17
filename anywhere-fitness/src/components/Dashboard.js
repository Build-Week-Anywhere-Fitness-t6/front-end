import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Class from "./Class";
import axios from "axios";

export default function Dashboard() {
    const { push } = useHistory();
  const [classes, setClasses] = useState([
      ]);


      const getClasses = () => {
        axios
          .get("https://ft-anywhere-fitness-6.herokuapp.com/api/classes")
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

    // const deleteClass = (id) => {
    //     setClasses(classes.filter((class) => class.class_id !== +id));
    // };
    
    //   const handleDelete = (id) => {
    //     axiosWithAuth()
    //       .delete(`/LINK/${id}`)
    //       .then((resp) => {
    //         deleteClass(id);
    //         push("/dashboard")
    //       })
    //       .catch((err) => {
    //         console.log(err.response);
    //       });
    //   };

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
                        // handleDelete={() => {
                        //     handleDelete(potluck.potluck_id);
                        // }}
                        />
                    );
                })}
            </div>
            <button onClick={handleAdd}>Create a Workout</button>
        </div>
        
    )
}
