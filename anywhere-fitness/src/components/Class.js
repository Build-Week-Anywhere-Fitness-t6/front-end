import React, {useState} from 'react';
import { Link, useHistory } from "react-router-dom";
import axiosWithAuth from '../utilities/axiosWithAuth';
// Material UI imports 
import { Button, ButtonGroup, Grid, Typography } from '@material-ui/core';


// Class Component 
export default function Class(props) {
  const role = localStorage.getItem("role");
  const { workout } = props;
  const { push } = useHistory();
  
  const [updatedWorkout, setUpdatedWorkout] = useState(workout)
  const [buttonToggle, setButtonToggle] = useState(true)
  const { id } = updatedWorkout.class_id
  const remainingSpots = (updatedWorkout.class_size-updatedWorkout.attendees)


 const signUp = (e) => {
  e.preventDefault();
  setUpdatedWorkout({
    ...updatedWorkout,
    attendees: updatedWorkout.attendees + 1,
  });
   console.log(updatedWorkout)
  axiosWithAuth()
      .put(`/classes/${updatedWorkout.class_id}`, updatedWorkout)
      .then((res) => {
        setButtonToggle(!buttonToggle)
          push("/dashboard")
      })
      .catch((err) => console.log(err));
}

const cancel = (e) => {
  e.preventDefault();
  setUpdatedWorkout({
    ...updatedWorkout,
    attendees: updatedWorkout.attendees - 1,
  });
   console.log(updatedWorkout)
  axiosWithAuth()
      .put(`/classes/${updatedWorkout.class_id}`, updatedWorkout)
      .then((res) => {
        setButtonToggle(!buttonToggle)
          push("/dashboard")
      })
      .catch((err) => console.log(err));
}

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
                    <Typography variant='h4' style={{width: '50%'}}>Spots Remaining:</Typography><Typography variant='p' style={{width: '50%', fontSize: '1.35rem', fontWeight: 600}}>{remainingSpots}</Typography>

                    <Grid item xs={12}>
                      <ButtonGroup variant='contained'size='large'>
                          {
                          role === "instructor" ?
                            <div>
                              <Button href={`/edit/${workout.class_id}`} style={{padding: '7px 75px', backgroundColor: '#86A776'}}>Edit Class</Button>
                              <Button onClick={props.handleDelete} style={{padding: '7px 75px', backgroundColor: '#BE0E34'}}>Delete Class</Button> 
                            </div>
                              :
                            <div>
                              {buttonToggle === true ?
                                <div>
                                  <Button  style={{padding: '7px 75px', backgroundColor: '#A1B9F7'}}onClick={signUp}>Sign Up</Button>
                                </div>
                                :
                                <div>
                                  <Button style={{padding: '7px 75px', backgroundColor: '#A1B9F7'}} onClick={cancel}>Cancel</Button> 
                                </div>          
                              }
                              </div>
                          }
   
                   </ButtonGroup>
                  </Grid>
                </Grid>
    )
}