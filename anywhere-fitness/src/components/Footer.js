import React from 'react'

// Material UI imports
import { Button, ButtonGroup, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const GridContainer = withStyles({
    root: {
      height: '11vh',
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'space-around',
      alignItems: 'center',
      margin: '0 auto',
      backgroundColor: '#073A4A',
      color: '#fff',
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
        <GridContainer className='footer' xs={11}>
            <BottomP item xs={12}>Footer</BottomP>
        </GridContainer>
    )
}
