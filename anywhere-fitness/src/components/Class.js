import React from 'react';
import { Link } from "react-router-dom";
// Material UI imports 
import { Button, ButtonGroup, Grid } from '@material-ui/core';


// Class Component 
export default function Class(props) {
    const { workout } = props;
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
                    <h3>Class Size:</h3><p>{workout.class_size}</p>
                </div>
             <div className='button-group'>
                {/* The goal is to make conditional rendering here. Sign Up is for users, cancel button only shows up 
                if the are signed up?
                Edit and delete would take their place if an instructor is viewing the class */}
                <ButtonGroup variant='contained'>
                    <Button>Sign Up</Button>
                    <Button>Cancel</Button>
                    <Button href={`/edit/${workout.class_id}`}>Edit Class</Button>
                    <Button onClick={props.handleDelete}>Delete Class</Button> 
                </ButtonGroup>
             </div>
            {/* </GridInfo> */}
          </Grid>
    )
}