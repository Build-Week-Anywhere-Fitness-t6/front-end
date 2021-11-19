import React, {useState} from 'react';

// Material UI imports 
import {
  AppBar,
  Toolbar,
  Popover,
  Typography,
  makeStyles,
  Button,
  ButtonGroup,
  MenuItem,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    color: '#000',
    fontSize: '2rem',
    textTransform: 'none',
    margin: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      minWidth: 32,
      padding: '0 9%',
      
      "& .MuiButton-startIcon": {
        margin: 0
      }
    },
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
  buttonText: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
}));

export default function Header() {
  const token = localStorage.getItem("token");

  // Material UI states for resizing
  const [openClose, setOpenClose] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  // end material UI                                                                                                      

    return (
      <>
      <AppBar position='static' className={classes.root}>
        <Toolbar style={{
                  color: '#fff',
                  backgroundColor: '#294DA6',
                  padding: '0 2%',
                  display: 'flex',
                  flexFlow: 'row nowrap',
                  justifyContent: 'space-between',
                  alignItems: 'center'}}>

        <Button variant='text' aria-describedby={id} onClick={handleClick}><MenuIcon fontSize='large'/></Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{vertical: 'bottom',horizontal: 'left'}}>
            {token ?
                <div className='logged-in'>
                  <Button href='/dashboard'>Dashboard</Button>
                  <Button href='/logout'>Log out</Button>
                </div>
                  :
                <div className='new-user'>
                  <Button href='/signup'>Sign Up</Button>
                  <Button href='/login'>Log In</Button>
                </div>}
      </Popover>      
          <Button href='/' style={{
                              color: '#FFC233', 
                              fontSize: '2rem', 
                              textDecoration: 'none'
                              }}>Anywhere Fitness
          </Button>
            <ButtonGroup variant='text'>

             {/* Conditional rendering of buttons depending on account type */}
              {token ?
                <div className='logged-in'>
                  <Button href='/dashboard' className={classes.button}><span className={classes.buttonText}>Dashboard</span></Button>
                  <Button href='/logout' className={classes.button}><span className={classes.buttonText}>Log Out</span></Button>
                </div>
                :
                <div className='new-user'>
                  <Button href='/signup' className={classes.button}><span className={classes.buttonText}>Sign Up</span></Button>
                  <Button href='/login' className={classes.button}><span className={classes.buttonText}>Log In</span></Button>
                </div>}
            </ButtonGroup>
        </Toolbar>
      </AppBar>
      </>
    )
}
