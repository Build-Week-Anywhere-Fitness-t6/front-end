import React from 'react'
import { ButtonGroup } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { createTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const NavLinks = withStyles({
    root: {
      color: '#000',  
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 15,
      fontWeight: 600,
      border: '1px solid',
      lineHeight: 1.5,
      padding: '10px 55px',
      backgroundColor: '#FFD470',
      borderColor: '#118AB2',
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
                <p class='nav-title'>Anywhere Fitness</p>
            <ButtonGroup>
                <NavLinks href='/'>Home</NavLinks>
                <NavLinks href='/login'>Log in</NavLinks>
                <NavLinks href='/signup'>Sign up</NavLinks>
                <NavLinks href='/team'>Our Team</NavLinks>
            </ButtonGroup>
            </nav>            
        </div>
    )
}
