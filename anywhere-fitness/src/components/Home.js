import React from 'react';
import Header from './Header';

// Material UI imports
import { Button, ButtonGroup, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Footer from './Footer';

// Home page Grid container
const HomePageContainer = withStyles({
  root: {
    height: '100%',
    overflow: 'scroll',
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    boxSizing: 'border-box',
    fontFamily: [
      'Raleway',
      'sans-serif'
    ].join(','),
  },
})(Grid);
// Styling for Hero header with image as background
const HeroGrid = withStyles({
  root: {
    height: '50vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'scroll',
    fontFamily: [
      'Raleway',
      'sans-serif'
    ].join(','),
  },
})(Grid);

// Styling for the first GridItem that is the section title 
  const TitleGrid = withStyles({
    root: {
      boxShadow: 'none',
      fontSize: 43,
      letterSpacing: 3,
      textAlign: 'center',
      fontWeight: 300,
      fontFamily: [
        'Raleway',
        'sans-serif'
      ].join(','),
    },
  })(Grid);

  const NavLinks = withStyles({
    root: {
      color: '#35BCE9',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      letterSpacing: 5,
      padding: '7px 45px',
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

  const PGrid = withStyles({
    root: {
      letterSpacing: 2,
      fontSize: 18,
      fontWeight: 500,
      padding: '4.1%',
      textAlign: 'center',
      fontFamily: [
        'Raleway',
        'sans-serif'
      ].join(','),
    },
  })(Grid);




export default function Home() {
  const token = localStorage.getItem("token");

    return (
        <HomePageContainer container xs={12} justifyContent='center'>
            <HeroGrid item xs={12} className='hero-image'>
              <div className='hero-text'>
                <Typography 
                    style={{
                      color: '#FFC233', 
                      letterSpacing: 5, 
                      fontSize: '8rem',
                      textShadow: '2px 1px 1px black',
                    }}
                  >Welcome to Anywhere Fitness
                </Typography>
                <div className='hero-buttons'>
                    {token ?
                    <div className='logged-in'>
                      <NavLinks href='/dashboard'>Dashboard</NavLinks>
                      <NavLinks href='/logout' style={{color: '#F17E9B'}}>Log out</NavLinks>
                    </div>
                    :
                    <div className='new-user'>
                      <NavLinks href='/signup' style={{color: '#0AC291'}}>Sign Up</NavLinks>
                      <NavLinks href='/login'>Log in</NavLinks>
                    </div>
                    }
                </div>
              </div>
           </HeroGrid>

            <Grid container xs={12} justifyContent='center' alignItems='center'>
               <TitleGrid item xs={12} style={{backgroundColor: '#073A4A', color: '#FFC233'}}>
                 <Typography variant='h2'>About us</Typography>
               </TitleGrid>
               <TitleGrid item xs={3}>
                 <Typography variant='h3'>Our Mission: </Typography>
               </TitleGrid>
                    <PGrid item xs={6}>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nascetur ridiculus mus mauris vitae ultricies leo integer. Maecenas volutpat blandit aliquam etiam. Suspendisse faucibus interdum posuere lorem.</p>
                      <br />
                      <p> Quam lacus suspendisse faucibus interdum posuere lorem. Nunc non blandit massa enim nec dui nunc mattis. In egestas erat imperdiet sed. Egestas sed sed risus pretium quam vulputate dignissim.</p>
                  </PGrid>
            </Grid>
            {/* Home page ends below  */}
            <Footer />
        </HomePageContainer>
    )
}
