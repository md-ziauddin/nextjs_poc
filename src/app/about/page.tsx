'use client';

import React from 'react';

import { useAppDispatch, useAppSelector } from '../redux/reduxHooks';
import { counter, decrement, increment } from '../redux/counter/counterSlice';
import { Button, Grid, Typography } from '@mui/material';

const About = () => {
  const count = useAppSelector(counter);
  const dispatch = useAppDispatch();

  return (
    <Grid
      container
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      height='100vh'
      sx={{
        background: 'white',
      }}
    >
      <Typography variant='body1' fontSize={24} mb={4} color='black'>
        Count: {count}
      </Typography>
      <Grid container justifyContent='center' alignItems='flex-start' gap={4}>
        <Button variant='contained' color='success' onClick={() => dispatch(increment())}>
          Increment
        </Button>
        <Button variant='contained' color='error' onClick={() => dispatch(decrement())}>
          Decrement
        </Button>
      </Grid>
    </Grid>
  );
};

export default About;
