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
                                            backgroundColor: '#6689E1',
                                            display: 'flex',
                                            flexFlow: 'row wrap',
                                            justifyContent: 'center',
                                            textAlign: 'center',
                                          }}>
          <Grid item xs={12} style={{backgroundColor: '#A1B9F7'}}>
            <Typography variant='h2' style={{textAlign: 'center', letterSpacing: 5, color: '#000'}}>Classes</Typography>
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
                  
              <ButtonGroup color='primary' variant='contained' style={{marginTop: '1%'}}>
                <Button style={{padding: '15px 75px'}} onClick={handleAdd}>Create a Workout</Button>
                <Button style={{padding: '15px 75px'}} href='/'>Home</Button>
              </ButtonGroup>
    </div>
    )
}