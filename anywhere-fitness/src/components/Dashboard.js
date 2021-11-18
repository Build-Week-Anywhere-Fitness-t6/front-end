import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Class from "./Class";
import axios from "axios";
import axiosWithAuth from "../utilities/axiosWithAuth";

// Material UI imports
import { withStyles } from '@material-ui/core/styles';
import { Button, ButtonGroup, Grid } from "@material-ui/core";

const GridContainer = withStyles({
  root: {
    height: '85vh',
    overflow: 'scroll',
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
// Individual Button styles 
const CButton = withStyles({
  root: {
    fontSize: '1.7rem',
    fontWeight: 500,
    padding: '0 25px',
    letterSpacing: 2, 
    backgroundColor: '#078865', 
  },
})(Button);
const HButton = withStyles({
  root: {
    fontSize: '1.7rem',
    fontWeight: 500,
    padding: '0 25px',
    letterSpacing: 2,    
  },
})(Button);



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
        <div className='class-title'><h2>Classes</h2></div>
      <GridContainer container justifyContent='center' spacing={3}>
            {classes.map((workout) => {
                    return (
                        <Class
                          className='class-info'
                          key={workout.class_id}
                          workout={workout}
                          handleDelete={() => {
                          handleDelete(workout.class_id);
                        }}
                        />
                    );
                })}
      </GridContainer>
      <br />
      <ButtonGroup variant='contained' color='primary'>
        <CButton onClick={handleAdd}>Create a Workout</CButton>
        <HButton href='/'>Home</HButton>
      </ButtonGroup>
     </div>
        
    )
}