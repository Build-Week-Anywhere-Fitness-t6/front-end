import React from 'react';

// Material UI imports 
import {
  AppBar,
  Toolbar,
  Typography,
  withStyles,
  Button,
  ButtonGroup
} from "@material-ui/core";

const NavLinks = withStyles({
  root: {
    color: '#fff',
    letterSpacing: 3,
    padding: '15px 45px',
    fontSize: 17,
    fontWeight: 600,
    lineHeight: 1.5,
    fontFamily: [
      'Raleway',
      'sans-serif'
    ].join(','),

    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      color: '#000',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,124,255,.5)',
    },
  },
})(Button);

export default function Header() {
  const token = localStorage.getItem("token");

    return (
      <AppBar position='static'>
        <Toolbar style={{
                  color: '#fff',
                  backgroundColor: '#294DA6',
                  padding: '0 2%',
                  display: 'flex',
                  flexFlow: 'row nowrap',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                    }}>
          <Button href='/' style={{color: '#FFC233', fontSize: '2rem', textDecoration: 'none'}}>Anywhere Fitness</Button>
            <ButtonGroup variant='text'>
              {token ?
                <div className='logged-in'>
                  <NavLinks href='/dashboard'>Dashboard</NavLinks>
                  <NavLinks href='/logout'>Log out</NavLinks>
                </div>
                :
                <div className='new-user'>
                  <NavLinks href='/signup'>Sign Up</NavLinks>
                  <NavLinks href='/login'>Log in</NavLinks>
                </div>
                }
            </ButtonGroup>
        </Toolbar>
      </AppBar>
    )
}
