import React from 'react'
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Footer from './Footer';

// Styling for the header link to sign in
const NavLinks = withStyles({
    root: {
      color: '#EBFEF9',  
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 15,
      fontWeight: 500,
      lineHeight: 1.5,
      padding: '7px 20px',
      backgroundColor: '#118AB2',
      fontFamily: [
        'Raleway',
        'sans-serif'
      ].join(','),

      '&:hover': {
        backgroundColor: '#E09D00',
        color: '#000',
        borderColor: '#074B4C',
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
// Styling for the GridContainer 
const GridContainer = withStyles({
  root: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontFamily: [
      'Raleway',
      'sans-serif'
    ].join(','),
  },
})(Grid);
// Styling for the first GridItem that is the section title 
  const GridTitle = withStyles({
    root: {
      color: '#ECF9FD',
      backgroundColor: '#073A4A',
      padding: '10px',
      letterSpacing: 5,
      boxShadow: 'none',
      fontSize: 43,
      fontWeight: 300,
      fontFamily: [
        'Raleway',
        'sans-serif'
      ].join(','),
    },
  })(Grid);
  // This will be for the title of the class
  const SubTitle = withStyles({
    root: {
      color: '#000',
      backgroundColor: '#F5A4B8',
      textAlign: 'center',
      padding: '7px',
      fontSize: 21,
      fontWeight: 500,
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
      fontSize: 15,
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


export default function Home() {
    return (
        <div className='home-page'>
            <header>
              <div className='header-text'>
                <h1>Welcome to Anywhere Fitness</h1>
                  <NavLinks href='/signup'>Click Here to Join</NavLinks>
                </div>
           </header>
           <div className='about'>
             <GridContainer container spacing={12}>
               <GridTitle item xs={12}><h2>About us</h2></GridTitle>
                  <div className='about-wrap'>
                    <div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nascetur ridiculus mus mauris vitae ultricies leo integer. Maecenas volutpat blandit aliquam etiam. Suspendisse faucibus interdum posuere lorem. Quam lacus suspendisse faucibus interdum posuere lorem. Nunc non blandit massa enim nec dui nunc mattis. In egestas erat imperdiet sed. Egestas sed sed risus pretium quam vulputate dignissim. Massa massa ultricies mi quis hendrerit dolor magna eget est. Ultrices neque ornare aenean euismod elementum nisi quis eleifend quam. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Metus aliquam eleifend mi in nulla posuere.</p>
                    </div>
                  </div>
             </GridContainer>
             </div>                                                                      
                                                                              {/* this is where the classes will be displayed */}
           <div className='classes'>
             <GridContainer container spacing={12}>
                                                                              {/* first item is the title that will stretch all the way across the grid */}
              <GridTitle item xs={12}><div className='class-title'><h2>Classes</h2></div></GridTitle>
                                                                              {/* These three items will be the Grids for each class */}
                <SubTitle item xs={4}><div className='subclass-title'><h3>Placeholder</h3></div></SubTitle>
                <SubTitle item xs={4}><div className='subclass-title'><h3>Placeholder</h3></div></SubTitle>
                <SubTitle item xs={4}><div className='subclass-title'><h3>Placeholder</h3></div></SubTitle>
                                                                           {/* These three grid items will display all of the info on the class passed into it  */}
                <GridInfo item xs={4}>
                  <div className='class-info'>
                    <p>info</p>
                    <p>info</p>
                    <p>info</p>
                    <p>info</p>
                    <p>info</p>
                  </div>
                </GridInfo>
                <GridInfo item xs={4}>
                <div className='class-info'>
                    <p>info</p>
                    <p>info</p>
                    <p>info</p>
                    <p>info</p>
                    <p>info</p>
                  </div>
                </GridInfo>
                <GridInfo item xs={4}>
                <div className='class-info'>
                    <p>info</p>
                    <p>info</p>
                    <p>info</p>
                    <p>info</p>
                    <p>info</p>
                  </div>
                </GridInfo>
                                                                                {/* These three items will be the Grids for each class */}
                <SubTitle item xs={4}><div className='subclass-title'><h3>Placeholder</h3></div></SubTitle>
                <SubTitle item xs={4}><div className='subclass-title'><h3>Placeholder</h3></div></SubTitle>
                <SubTitle item xs={4}><div className='subclass-title'><h3>Placeholder</h3></div></SubTitle>
                                                                              {/* These three grid items will display all of the info on the class passed into it  */}
                <GridInfo item xs={4}>
                  <div className='class-info'>
                    <p>info</p>
                    <p>info</p>
                    <p>info</p>
                    <p>info</p>
                    <p>info</p>
                  </div>
                </GridInfo>
                <GridInfo item xs={4}>
                <div className='class-info'>
                    <p>info</p>
                    <p>info</p>
                    <p>info</p>
                    <p>info</p>
                    <p>info</p>
                  </div>
                </GridInfo>
                <GridInfo item xs={4}>
                <div className='class-info'>
                    <p>info</p>
                    <p>info</p>
                    <p>info</p>
                    <p>info</p>
                    <p>info</p>
                  </div>
                </GridInfo>
            </GridContainer>
            </div>
            <Footer />
        </div>
    )
}
