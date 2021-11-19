import React from 'react';
import { Link } from "react-router-dom";
// Material UI imports 
import { Button, ButtonGroup, Grid, Typography } from '@material-ui/core';


// Class Component 
export default function Class(props) {
  const token = localStorage.getItem("token");

    const { workout } = props;
    if (!workout) {
        return <h3>Working on getting event information...</h3>;
      }
    return (
          <Grid item xs={12} sm={12} md={12} lg={5} style={{
                                                      height: '36vh',
                                                      border: '3px solid black',
                                                      borderRadius: '7px',
                                                      backgroundColor: '#F3F4F7',
                                                      margin: '0 auto',
                                                      marginBottom: '1%',
                                                      display: 'flex',
                                                      flexFlow: 'row wrap',
                                                      alignItems: 'center',
                                                      justifyContent: 'space-evenly',
                                                      textAlign: 'center',
                                                  }}>

                                                    
                    <Typography variant='h4' style={{backgroundColor: '#294DA6', color: '#FFC233', width: '100%'}}>{workout.name}</Typography>
                    <Typography variant='h4' style={{width: '50%'}}>{workout.intensity}: </Typography> <Typography variant='p' style={{width: '50%', fontSize: '1.35rem', fontWeight: 600}}>{workout.type}</Typography>
                    <Typography variant='h4' style={{width: '50%'}}>Start Time:</Typography> <Typography variant='p' style={{width: '50%', fontSize: '1.35rem', fontWeight: 600}}>{workout.start_time}</Typography>
                    <Typography variant='h4' style={{width: '50%'}}>Duration:</Typography> <Typography variant='p' style={{width: '50%', fontSize: '1.35rem', fontWeight: 600}}>{workout.duration}</Typography>
                    <Typography variant='h4' style={{width: '50%'}}>Location:</Typography> <Typography variant='p' style={{width: '50%', fontSize: '1.35rem', fontWeight: 600}}>{workout.location}</Typography>
                    <Typography variant='h4' style={{width: '50%'}}>Instructor:</Typography> <Typography variant='p' style={{width: '50%', fontSize: '1.35rem', fontWeight: 600}}>{workout.instructor_username}</Typography>
                    <Typography variant='h4' style={{width: '50%'}}>Class Size:</Typography><Typography variant='p' style={{width: '50%', fontSize: '1.35rem', fontWeight: 600}}>{workout.class_size}</Typography>

                  <ButtonGroup variant='text' style={{width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                    {token ?
                      <div>
                        <Button style={{backgroundColor: '#86A776', padding: '2px 25px', margin: '10px 5px',}}href={`/edit/${workout.class_id}`}>Edit Class</Button>
                        <Button style={{backgroundColor: '#BE0E34', padding: '2px 25px', margin: '10px 5px', color: '#FFF'}}onClick={props.handleDelete}>Delete Class</Button> 
                      </div>
                      :
                      <div>
                        <Button>Sign Up</Button>
                        <Button>Cancel</Button>
                      </div>
                    }
                  </ButtonGroup>
                </Grid>
    )
}