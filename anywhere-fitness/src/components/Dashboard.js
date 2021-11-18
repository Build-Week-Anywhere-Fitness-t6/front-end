import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Class from "./Class";
import axios from "axios";
import axiosWithAuth from "../utilities/axiosWithAuth";

// Material UI imports
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
// Individual styles for each grid item
const GridContainer = withStyles({
  root: {
    height: 'auto',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontFamily: [
      'Raleway',
      'sans-serif'
    ].join(','),
  },
})(Grid);
// Individual styles for class info
const GridTitle = withStyles({
  root: {
    color: '#ECF9FD',
    backgroundColor: '#073A4A',
    padding: '10px',
    letterSpacing: 5,
    boxShadow: 'none',
    fontSize: 43,
    fontWeight: 300,
    fontFamily: [
      'Raleway',
      'sans-serif'
    ].join(','),
  },
})(Grid);

// Dashboard Component start
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
      <div className='classes'>
      <GridContainer container spacing={12}>
        <GridTitle item xs={12}><div className='class-title'><h2>Classes</h2></div></GridTitle>
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
      </GridContainer>
      <Button 
        onClick={handleAdd}
        variant='contained'
        color='primary'
        >
        Create a Workout
        </Button>
     </div>
        
    )
}