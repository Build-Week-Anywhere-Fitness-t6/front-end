import React from 'react';
import { Link } from "react-router-dom";

// Material UI imports 
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Button, ButtonGroup } from '@material-ui/core';
    // This will be for the title of the class
    const SubTitle = withStyles({
      root: {
        color: '#000',
        backgroundColor: '#F5A4B8',
        textAlign: 'center',
        padding: '7px',
        fontSize: 21,
        fontWeight: 500,
        textDecoration: 'underline',
        fontFamily: [
          'Raleway',
          'sans-serif'
        ].join(','),
      },
    })(Grid);
                 // This is where the class info will go 
    const GridInfo = withStyles({
      root: {
        height: '33.3vh',
        color: '#000',
        backgroundColor: '#fff',
        boxShadow: 'none',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        overflowX: 'hidden',
        fontFamily: [
          'Raleway',
          'sans-serif'
        ].join(','),
      },
    })(Grid);

export default function Class(props) {
    const { workout } = props;
    if (!workout) {
        return <h3>Working on getting event information...</h3>;
      }

    return (
        <div className='added-class'>
            <SubTitle item xs={4}><div className='subclass-title'><h3>{workout.name}</h3></div></SubTitle>
            <GridInfo item xs={4}>
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
                <ButtonGroup variant='text' size='large'>
                    <Button>Sign Up</Button>
                    <Button>Cancel</Button>
                    <Button href={`/edit/${workout.class_id}`}>Edit Class</Button>
                    <Button onClick={props.handleDelete}>Delete Class</Button> 
                </ButtonGroup>
             </div>
            </GridInfo>
        </div>
        
    )
}