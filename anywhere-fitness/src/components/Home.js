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
  
  const PGrid = withStyles({
    root: {
      letterSpacing: 2,
      fontSize: 18,
      fontWeight: 500,
      padding: '3.7%',
      textAlign: 'center',
      fontFamily: [
        'Raleway',
        'sans-serif'
      ].join(','),
    },
  })(Grid);



export default function Home() {
    return (
        <HomePageContainer container xs={12} justifyContent='center'>
            <HeroGrid item xs={12} className='hero-image'>
                <Typography>Welcome to Anywhere Fitness</Typography>
           </HeroGrid>

            <Grid container xs={12} justifyContent='center' alignItems='center'>
               <TitleGrid item xs={12} style={{backgroundColor: '#073A4A', color: '#FFF'}}>
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
        </HomePageContainer>
    )
}
