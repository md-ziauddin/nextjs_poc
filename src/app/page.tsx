import CustomSlider from '@/components/CustomSlider';
import styles from './page.module.css';
import Switch from '@mui/material/Switch';
import { Link as MuiLink } from '@mui/material';
import Link, { LinkProps } from 'next/link';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function Home() {
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
    </div>
  );
}
