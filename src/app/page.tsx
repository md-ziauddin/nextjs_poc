import { Grid, Link as MuiLink, Typography } from '@mui/material';
import Link from 'next/link';
import axiosApi from './_utils/apiConfig/axiosConfig';
import { NextPageContext } from 'next';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const getTodo = async () => {
  try {
    const response = await axiosApi.get('/test');

    return response;
  } catch (err: any) {
    console.log(err.message);
  }
};

export default async function Home() {
  const todo = await getTodo();

  return (
    <Grid
      container
      flexDirection='column'
      height='100vh'
      justifyContent='center'
      alignContent='center'
      sx={{
        background: 'white',
      }}
    >
      <Typography color='black'>Hello world!!!</Typography>
      <MuiLink component={Link} href='/about'>
        About
      </MuiLink>
      <MuiLink component={Link} href='/signin'>
        Login
      </MuiLink>
      <MuiLink component={Link} href='/protectedroute'>
        Protected Route(SSR)
      </MuiLink>
      <MuiLink component={Link} href='/protectedroute-client'>
        Protected Route(client)
      </MuiLink>
    </Grid>
  );
}
