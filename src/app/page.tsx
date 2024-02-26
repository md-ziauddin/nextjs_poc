import CustomSlider from '@/components/CustomSlider';
import styles from './page.module.css';
import Switch from '@mui/material/Switch';
import { Grid, Link as MuiLink, Typography } from '@mui/material';
import Link, { LinkProps } from 'next/link';
import axiosApi from './_utils/apiConfig/axiosConfig';

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
      <Typography color='black'>Hello World!!!</Typography>
      <Link href='/about' passHref>
        <MuiLink>About</MuiLink>
      </Link>
      <Link href='/signin' passHref>
        <MuiLink>Login</MuiLink>
      </Link>
    </Grid>
  );
}
