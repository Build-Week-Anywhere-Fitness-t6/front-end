import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Class from "./Class";

export default function Dashboard() {
    const { push } = useHistory();
  const [classes, setClasses] = useState([{ 
      name: "Yoga in the living room", 
        instructor_username: "deeyoak", 
        type: "yoga", 
        start_time: "9am", 
        duration: "20mins", 
        intensity: "beginner", 
        location: "living room floor", 
        class_size: 1 }]);


    //   const getClasses = () => {
    //     axiosWithAuth()
    //       .get("LINK")
    //       .then((res) => {
    //         setClasses(res.data);
    //       })
    //       .catch((err) => {
    //         console.log(err.response);
    //       });
    //   };

    // useEffect(() => {
    //     getClasses();
    // }, []);

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
                {classes.map((potluck) => {
                    return (
                        <Class
                        key={potluck.potluck_id}
                        potluck={potluck}
                        // handleDelete={() => {
                        //     handleDelete(potluck.potluck_id);
                        // }}
                        />
                    );
                })}
            </div>
            <button onClick={handleAdd}>Create a Class</button>
        </div>
        
    )
}
