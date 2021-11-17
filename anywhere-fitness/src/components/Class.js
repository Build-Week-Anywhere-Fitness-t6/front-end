import React from 'react'

export default function Class(props) {
    const { workout } = props;
    if (!workout) {
        return <h3>Working on getting event information...</h3>;
      }

    return (
        <div>
            <div>
                <h2>{workout.name}</h2>
                <p>{workout.intensity} {workout.type}</p>
                <p>Start Time: {workout.start_time}</p>
                <p>Duration: {workout.duration}</p>
                <p>Location: {workout.location}</p>
                <p>Instructor: {workout.instructor_username}</p>
                <p>Class Size: {workout.class_size}</p>
            </div>
            <div>
                {/* The goal is to make conditional rendering here. Sign Up is for users, cancel button only shows up 
                if the are signed up?
                Edit and delete would take their place if an instructor is viewing the class */}
                 <button>Sign Up</button>
                <button>Cancel</button>
                <button>Edit Class</button>
                <button onClick={props.handleDelete}>Delete Class</button> 
            </div>
        </div>
    )
}
