import CustomSlider from '@/components/CustomSlider';
import styles from './page.module.css';
import Switch from '@mui/material/Switch';
import { Link as MuiLink } from '@mui/material';
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
  console.log({ todoRoot: todo?.data });

  return (
    <div className={styles.container}>
      <div>
        <span>With default Theme:</span>
      </div>
      <Switch {...label} defaultChecked />
      <Switch {...label} />
      <Switch {...label} disabled defaultChecked />
      <CustomSlider warning={true} />
      <CustomSlider warning={false} />
      <Link href='/about' passHref>
        <MuiLink>About</MuiLink>
      </Link>
      <Link href='/signin' passHref>
        <MuiLink>Sign in</MuiLink>
      </Link>
    </div>
  );
}
