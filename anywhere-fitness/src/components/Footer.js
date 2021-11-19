import React from 'react'

// Material UI imports
import { Button, ButtonGroup, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const GridContainer = withStyles({
    root: {
      height: '11vh',
      margin: '0 auto',
      color: '#fff',
      backgroundColor: '#294DA6',
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
  const BottomP = withStyles({
    root: {
      boxShadow: 'none',
      fontSize: 22,
      fontWeight: 500,
      textAlign: 'center',
      fontFamily: [
        'Raleway',
        'sans-serif'
      ].join(','),
    },
  })(Grid);

export default function Footer() {
    return (
        <GridContainer className='footer' xs={12}>
            <BottomP item xs={12}>Footer</BottomP>
        </GridContainer>
    )
}
