import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Class from "./Class";
import axios from "axios";
import axiosWithAuth from "../utilities/axiosWithAuth";

// Material UI imports
import { withStyles } from '@material-ui/core/styles';
import { Button, ButtonGroup, Grid, Typography } from "@material-ui/core";

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
// Individual Button styles 
const CButton = withStyles({
  root: {
    fontSize: '1.7rem',
    fontWeight: 500,
    padding: '0 25px',
    letterSpacing: 2, 
    backgroundColor: '#078865', 
    padding: '7px 21px',    
  },
})(Button);
const HButton = withStyles({
  root: {
    fontSize: '1.7rem',
    fontWeight: 500,
    padding: '0 25px',
    letterSpacing: 2,    
    padding: '7px 21px',    
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
      <div style={{textAlign: 'center'}}>
        <GridContainer container xs={12} spacing={5} style={{
                                            width: '100%',
                                            margin: '0 auto',
                                            display: 'flex',
                                            flexFlow: 'row wrap',
                                            justifyContent: 'center',
                                            textAlign: 'center',
                                          }}>
          <Grid item xs={12}>
            <Typography variant='h2' style={{textAlign: 'center',}}>Classes</Typography>
            </Grid>
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
                  
              <ButtonGroup variant='contained'>
                <CButton onClick={handleAdd}>Create a Workout</CButton>
                <Button href='/'>Home</Button>
              </ButtonGroup>
    </div>
    )
}