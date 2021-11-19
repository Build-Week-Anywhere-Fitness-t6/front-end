import React, {useState} from 'react';
import { Link, useHistory } from "react-router-dom";
import axiosWithAuth from '../utilities/axiosWithAuth';
// Material UI imports 
import { Button, ButtonGroup, Grid } from '@material-ui/core';

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
          <Grid item xs={12} sm={9} md={9} lg={5}>
              <h3 className='subclass-title'>{workout.name}</h3>
                <div className='class-info'>
                    <h3>{workout.intensity}: </h3><p>{workout.type}</p>
                   <h3>Start Time:</h3> <p>{workout.start_time}</p>
                    <h3>Duration:</h3> <p>{workout.duration}</p>
                    <h3>Location:</h3><p>{workout.location}</p>
                    <h3>Instructor:</h3><p>{workout.instructor_username}</p>
                    <h3>Class Limit:</h3><p>{workout.class_size}</p>
                    <h3>Spots Remaining:</h3><p>{remainingSpots}</p>
                </div>
             <div className='button-group'>

                <ButtonGroup variant='text' size='large'>
                     
                    {
                    role === "instructor" ?
                      <div>
                        <Button href={`/edit/${workout.class_id}`}>Edit Class</Button>
                        <Button onClick={props.handleDelete}>Delete Class</Button> 
                      </div>
                        :
                      <div>
                         {buttonToggle === true ?
                          <div>
                            <Button onClick={signUp}>Sign Up</Button>
                          </div>
                          :
                          <div>
                             <Button onClick={cancel}>Cancel</Button> 
                          </div>
                                                      
                         }
                        </div>
                    }
                   
                </ButtonGroup>
             </div>
            {/* </GridInfo> */}
          </Grid>
    )
}