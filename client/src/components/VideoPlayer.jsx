import React, { useContext } from 'react';
import { Typography, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { SocketContext } from '../SocketContext';

const useStyles = makeStyles((theme) => ({
  video: {
    width: '550px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  paper: {
    padding: '10px',
    border: '2px solid black',
    margin: '10px',
  },
}));

const VideoPlayer = () => {
  const classes = useStyles();
  const { myVideo, userVideo, name, me, callAccepted, callEnded, stream, call } = useContext(SocketContext);
  return (
    <Grid container className={classes.gridContainer}>
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant='h5' gutterBottom>
              {name || 'Name'}
            </Typography>
            <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
          </Grid>
        </Paper>
        <Paper className={classes.paper} style={(callAccepted && !callEnded) ? {} : { display: 'none' }}>
          <Grid item xs={12} md={6}>
            <Typography variant='h5' gutterBottom>
              {call.name || 'Secondary Name'}
            </Typography>
            <video playsInline ref={userVideo} autoPlay className={classes.video} />
          </Grid>
        </Paper>
    </Grid>
  )
}

export default VideoPlayer
