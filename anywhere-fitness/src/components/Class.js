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
          <Grid item xs={12} sm={9} md={9} lg={5} style={{
                                                      display: 'flex',
                                                      flexFlow: 'row wrap',
                                                      justifyContent: 'space-between',
                                                      alignItems: 'center',
                                                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                                      margin: '2%',
                                                      padding: '2%'
                                                  }}>
                    <Typography variant='h4' style={{backgroundColor: '#DC1849', width: '100%'}}>{workout.name}</Typography>
                    <Typography variant='h4' style={{width: '50%'}}>{workout.intensity}: </Typography> <Typography variant='p' style={{width: '50%', fontSize: '1.35rem', fontWeight: 600}}>{workout.type}</Typography>
                    <Typography variant='h4' style={{width: '50%'}}>Start Time:</Typography> <Typography variant='p' style={{width: '50%', fontSize: '1.35rem', fontWeight: 600}}>{workout.start_time}</Typography>
                    <Typography variant='h4' style={{width: '50%'}}>Duration:</Typography> <Typography variant='p' style={{width: '50%', fontSize: '1.35rem', fontWeight: 600}}>{workout.duration}</Typography>
                    <Typography variant='h4' style={{width: '50%'}}>Location:</Typography> <Typography variant='p' style={{width: '50%', fontSize: '1.35rem', fontWeight: 600}}>{workout.location}</Typography>
                    <Typography variant='h4' style={{width: '50%'}}>Instructor:</Typography> <Typography variant='p' style={{width: '50%', fontSize: '1.35rem', fontWeight: 600}}>{workout.instructor_username}</Typography>
                    <Typography variant='h4' style={{width: '50%'}}>Class Size:</Typography><Typography variant='p' style={{width: '50%', fontSize: '1.35rem', fontWeight: 600}}>{workout.class_size}</Typography>

                  <ButtonGroup variant='text' size='large' style={{width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                    {token ?
                      <div>
                        <Button href={`/edit/${workout.class_id}`}>Edit Class</Button>
                        <Button onClick={props.handleDelete}>Delete Class</Button> 
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