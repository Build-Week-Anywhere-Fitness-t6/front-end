import React from 'react'
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';



const NavLinks = withStyles({
    root: {
      color: '#EBFEF9',  
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 15,
      fontWeight: 500,
      lineHeight: 1.5,
      padding: '10px 55px',
      backgroundColor: '#118AB2',
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



export default function Home() {
    return (
        <div className='home-page'>
            <header>
              <div className='header-text'>
                <h1>Welcome to Anywhere Fitness</h1>
                  <NavLinks href='/signup'>Sign up</NavLinks>
                </div>
           </header>
           <section className='about'>
             <h2>About us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non nisi est sit amet facilisis. Sed faucibus turpis in eu mi bibendum neque. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis.
                Varius duis at consectetur lorem donec. Nulla facilisi morbi tempus iaculis urna id volutpat. Elementum nibh tellus molestie nunc non blandit. Augue mauris augue neque gravida in fermentum et sollicitudin ac. Amet volutpat consequat mauris nunc congue nisi vitae. Nunc sed velit dignissim sodales ut eu sem. At volutpat diam ut venenatis tellus in. 
              </p>
            </section>
        </div>
    )
}
