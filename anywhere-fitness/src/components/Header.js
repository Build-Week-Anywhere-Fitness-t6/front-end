import React from 'react'
import { ButtonGroup } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const NavLinks = withStyles({
    root: {
      color: '#EBFEF9',
      backgroundColor: 'rgba(20, 174, 225, 0.1)',  
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 15,
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: 1.5,
      padding: '10px 100px',
      fontFamily: [
        'Raleway',
        'sans-serif'
      ].join(','),

      '&:hover': {
        backgroundColor: '#E09D00',
        borderColor: '#073B4C',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      },
    },
  })(Button);


export default function Header() {
    return (
        <div className='header'>
            <nav>
                <a 
                  className='nav-title' 
                  href='/'>
                  Anywhere Fitness
                  </a>
            <ButtonGroup variant='text' >
                <NavLinks href='/signup'>Sign up</NavLinks>
                <NavLinks href='/login'>Log in</NavLinks>
            </ButtonGroup>
            </nav>            
        </div>
    )
}
